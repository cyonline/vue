import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// 开启debug模式
Vue.config.debug = true;

Vue.config.productionTip = false;

import {router} from "./router";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
