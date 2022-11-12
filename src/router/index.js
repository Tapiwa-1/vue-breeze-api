import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'

const routes =[
    {path: '/', component: Home},
    {path: '/login', component : ()=>import ("../components/Login.vue")},
    {path: '/register', component : ()=>import ("../components/Register.vue")},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;