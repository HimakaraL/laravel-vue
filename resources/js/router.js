import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

const routes = [
    { path: "/", component: HomePage, name: "HomePage" },
    { path: "/login", component: LoginPage, name: "LoginPage" },
    { path: "/register", component: RegisterPage, name: "RegisterPage" },
    { path: "/profile", component: ProfilePage, name: "ProfilePage" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
