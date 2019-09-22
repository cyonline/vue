import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";

// 开启debug模式
Vue.config.debug = true;

Vue.config.productionTip = false;
Vue.use(VueRouter);

import Page_1 from "./components/pages/page_1";
import Page_2 from "./components/pages/page_2";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/page_1",
      component: Page_1
    },
    {
      path: "/page_2",
      component: Page_2
    }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
