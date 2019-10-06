import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./common/style/index.scss";

// 开启debug模式
Vue.config.debug = true;

Vue.config.productionTip = false;

import router from "./router";

// 引入指令
import Highlight from "./components/directives/highlight";


Vue.use(Highlight);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
