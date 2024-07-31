import './bootstrap';
import { createApp } from 'vue';


const app = createApp({});

import RegisterFormComponent from './components/RegisterFormComponent.vue';
import LogInFormComponent from './components/LogInFormComponent.vue';
import EditFormComponent from './components/EditFormComponent.vue';
import ViewProfileComponent from './components/ViewProfileComponent.vue';
import Home from '../pages/HomePage.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


app.component('register-component', RegisterFormComponent);
app.component('login-component', LogInFormComponent);
app.component('edit-component', EditFormComponent);
app.component('view-component', ViewProfileComponent);
app.component('home', Home);

app.mount('#app');
