import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './axios';
import './style.css';
import 'flowbite';
import App from './App.vue';

const pinia = createPinia();
pinia.use(({store})=>{
    store.router = markRaw(router); //giving router access to all JS store
})

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
