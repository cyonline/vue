<template>
  <div class="page1-e" key="page1-e">
    <div class="section_1">
      <h2>路由守卫解析流程</h2>
      <ol>
        <li>导航被触发。</li>
        <li>在失活的组件里调用离开守卫。</li>
        <li>调用全局的 beforeEach 守卫。</li>
        <li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li>
        <li>在路由配置里调用 beforeEnter。</li>
        <li>解析异步路由组件。</li>
        <li>在被激活的组件里调用 beforeRouteEnter。</li>
        <li>调用全局的 beforeResolve 守卫 (2.5+)。</li>
        <li>导航被确认。</li>
        <li>调用全局的 afterEach 钩子。</li>
        <li>触发 DOM 更新。</li>
        <li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</li>
      </ol>
      <div v-highlight>
        <pre>
          <code>
            const router = new VueRouter({...});
            router.beforeEach((to, from, next) => {
            const routePath = ["page_1", "a", "b", "c", "d", "e", "page_2"];
            let isLogin = true;
            // 当前路由是指定页时
            if (routePath.indexOf(to.name) > 0) {
                if (!isLogin) {
                    // 未登录,跳到登录页
                    alert('请先登录');
                    this.$router.push({ name: "login" });
                } else {
                    // 已登录,跳转到当前路由
                    next();
                }
            }
            // 当前路由是login时
            if (to.name === 'login') {
                if (!isLogin) {
                    // 未登录,跳到当前页
                    this.$router.push({ name: 'login' });
                } else {
                    // 已经登录,跳转到首页
                    this.$router.push({ name: 'page_1' });
                }
            }
            next();
});
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "e",
  data() {
    return {};
  }
};
</script>
