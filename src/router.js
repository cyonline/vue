import Vue from "vue";
import VueRouter from "vue-router";

import Page_1 from "./components/pages/page_1";
import Page_2 from "./components/pages/page_2";

import AComponent from "./components/pages/page_1/aComponent";
import BComponent from "./components/pages/page_1/bComponent";

Vue.use(VueRouter);

const routes = [
    { path: '', component: Page_1 },
    {
        path: "/page_1/",
        component: Page_1,
        children: [
            { path :'',component:AComponent},
            { path: 'a', component: AComponent },
            { path: 'b', component: BComponent },
        ]
    },
    {
        path: "/page_2",
        component: Page_2
    }
]
export const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
})