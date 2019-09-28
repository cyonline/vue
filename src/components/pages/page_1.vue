<template>
  <div id="page_1">
    <!-- 带侧边栏和内容栏的container -->
    <cy-container :sidebar="sidebar"></cy-container>
  </div>
</template>
<script>
import cyContainer from "../layout/Container.vue";

export default {
  components: {
    cyContainer
  },
  data() {
    return {
      sidebar: [
        { txt: "第一页", path: "/page_1/a" },
        { txt: "路由", path: "/page_1/b" },
        { txt: "重定向和别名", path: "/page_1/c" },
        { txt: "路由传参", path: "/page_1/d" },
      ]
    };
  }
};
</script>