// import './bootstrap';
// import { createApp } from 'vue';

// const app = createApp({});

// import Home from '../pages/HomePage.vue';
// import LoginPage from '../pages/LoginPage.vue';
// import RegPage from '../pages/RegisterPage.vue';
// import ProfilePage from '../pages/ProfilePage.vue';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// app.component('home', Home);
// app.component('login-page', LoginPage);
// app.component('register-page', RegPage);
// app.component('profile-page', ProfilePage);

// app.mount('#app');

import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);

app.mount('#app');

