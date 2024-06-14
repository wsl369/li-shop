import { createApp } from 'vue';
import '@/assets/styles/index.scss';
import App from './App.vue';
import SvgIcon from '~virtual/svg-component';
// main.ts
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.component(SvgIcon.name, SvgIcon);
app.mount('#app');
