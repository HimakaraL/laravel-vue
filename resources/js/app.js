import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import Toast, { POSITION } from 'vue-toastification';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    icon: false
})

app.mount('#app');

