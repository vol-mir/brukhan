import './bootstrap';
import 'bootstrap';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './components/App.vue';

createApp(App).use(router).use(createPinia()).mount('#app');
