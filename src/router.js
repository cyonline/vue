import Vue from "vue";
import VueRouter from "vue-router";

import Page_1 from "./components/pages/page_1";
import Page_2 from "./components/pages/page_2";

import AComponent from "./components/pages/page_1/aComponent";
import BComponent from "./components/pages/page_1/bComponent";
import CComponent from "./components/pages/page_1/cComponent";

Vue.use(VueRouter);

const routes = [
    { path: '', component: Page_1 },
    {
        path: "/page_1/",
        component: Page_1,
        children: [
            { path: '', component: AComponent },
            { path: 'a', component: AComponent, name:'a' },
            { path: 'b', component: BComponent, name: 'b' },
            { path: 'c', component: CComponent, name: 'c' },
            { path: '**', redirect:'a'},
        ]
    },
    {
        path: "/page_2",
        component: Page_2
    },
    {
        path: "*",
        redirect: "page_1",
    }
];
export const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});