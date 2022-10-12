import { createRouter, createWebHashHistory } from "vue-router";

// eslint-disable-next-line no-unused-vars
const routes = [
    {
        name : "HomePage",
        path : "/",
        component : () => import("@/views/Home.vue")
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/Login.vue")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/Register.vue")
    },
    {
        name : "NewBookMarkPage",
        path : "/new",
        component : () => import("@/views/NewBookMark.vue")
    }
]

export default createRouter({
    routes,
    history : createWebHashHistory()
})