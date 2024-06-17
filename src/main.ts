import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 添加导入 createPinia
import App from './App.vue';
import SvgIcon from '~virtual/svg-component';
import router from './router'; // 添加导入 router
import '@/assets/styles/index.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component(SvgIcon.name, SvgIcon);
app.mount('#app');
