import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import UnpluginSvgComponent from 'unplugin-svg-component/vite';

import vue from '@vitejs/plugin-vue';
//导入自动导vue组件的插件
import Components from 'unplugin-vue-components/vite';
//导入自动打包的插件
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnpluginSvgComponent({
      iconDir: ['./src/assets/svg'],
      dts: true,
      dtsDir: './src/types',
    }),
    vue(),
    AutoImport({
      //用来指定需要自动导入的包
      imports: [
        // {
        //   vue: ['ref', 'computed'],
        // },re
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'createFetch',
            'useInfiniteScroll',
            'refDebounced',
            'useScroll',
            'useLocalStorage',
          ],
        },
      ],
      //自动生成类型描述文件
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['./src/**/*'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['./src/components', './src/layout', './src/views'],
      dts: 'src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
