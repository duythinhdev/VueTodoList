import { createWebHistory, createRouter,RouteRecordRaw } from "vue-router";
import Login from "@/components/Login/Login.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component:Login,
        name:"login"
    },
    {
        path: "/main",
        component: () => import('@/components/Main/Main.vue'),
        name:"main"
    },
];
const history =  createWebHistory(process.env.BASE_URL);
const router =  createRouter({
    history: history,
    routes
});
export default router;
