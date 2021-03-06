/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";

// import Page_1 from "./components/pages/page_1";
// import Page_2 from "./components/pages/page_2";
// import动态加载模块,获取的是一个promise对象
const Page_1 = () => import("./components/pages/page_1");
const Page_2 = () => import("./components/pages/page_2");
const Page_3 = () => import("./components/pages/page_3");

import AComponent from "./components/pages/page_1/aComponent";
import BComponent from "./components/pages/page_1/bComponent";
import CComponent from "./components/pages/page_1/cComponent";
import DComponent from "./components/pages/page_1/dComponent";
import EComponent from "./components/pages/page_1/eComponent";
import FComponent from "./components/pages/page_1/fComponent";
import Page_2_a from "./components/pages/page_2/page_2_a";
import Page_2_b from "./components/pages/page_2/page_2_b";
import List from "./components/pages/page_3/list";
import Article from "./components/pages/page_3/article";

Vue.use(VueRouter);

const routes = [
    { path: '', component: Page_1 },
    {
        path: "/page_1/",
        name: "page_1",
        component: Page_1,
        children: [
            { path: '', redirect: { name: "a" } },
            { path: 'a', component: AComponent, name: 'a' },
            { path: 'b', component: BComponent, name: 'b' },
            { path: 'c', component: CComponent, name: 'c' },
            { path: 'd', component: DComponent, name: 'd' },
            { path: 'e', component: EComponent, name: 'e' },
            { path: 'f', component: FComponent, name: 'F' },
            { path: '**', redirect: { name: "a" } },
        ]
    },
    {
        path: "/page_2/",
        name: "page_2",
        component: Page_2,
        children: [
            { path:'',redirect: { name: "page_2_a" }},
            { path:'page_2_a', name:"page_2_a",component: Page_2_a,},
            { path:'page_2_b', name:"page_2_b",component: Page_2_b},
        ]
    },
    {
        path: "/page_3",
        name: "page_3",
        component: Page_3,
        children: [
            { path: '',redirect: {name: "list"}},
            { path: 'list',name:"list", component: List },
            { path: 'article/:id',name:"article", component: Article },
        ]
    },
    // {
    //     path: "*",
    //     redirect: "/page_1",
    // }
];
const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//     // ...
//     const routePath = ["page_1", "a", "b", "c", "d", "e", "page_2"];
//     let isLogin = true;
//     // console.info(routePath.indexOf(to.name));
//     // console.info(to);
//     // 当前路由是指定页时
//     if (routePath.indexOf(to.name) > 0) {
//         if (!isLogin) {
//             // 未登录,跳到登录页
//             alert('请先登录');
//             this.$router.push({ name: "login" });
//         } else {
//             // 已登录,跳转到当前路由
//             next();
//         }
//     }
//     // 当前路由是login时
//     if (to.name === 'login') {
//         if (!isLogin) {
//             // 未登录,跳到当前页
//             this.$router.push({ name: 'login' });
//         } else {
//             // 已经登录,跳转到首页
//             this.$router.push({ name: 'page_1' });
//         }
//     }
//     next();
// });
export default router;
