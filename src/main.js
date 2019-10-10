import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./common/style/index.scss";
import "./assets/json/user.json";
// 开启debug模式
Vue.config.debug = true;

Vue.config.productionTip = false;

import router from "./router";
require("./mock/mock");

// 引入指令
import Highlight from "./components/directives/highlight";

// 注入指令
Vue.use(Highlight);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
