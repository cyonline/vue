<template>
  <div id="page1-b">
    <div class="section_1">
      <h2>{{title_1}}</h2>
      <div v-highlight>
        <pre>
          <code class="vue">
            // 字符串
          router.push('home')

          // 对象
          router.push({ path: 'home' })

          // 命名的路由
          router.push({ name: 'user', params: { userId: '123' }})

          // 带查询参数，变成 /register?plan=private
          router.push({ path: 'register', query: { plan: 'private' }})
          </code>
        </pre>
      </div>
    </div>
    <div class="section_2">
      <h2>{{title_2}}</h2>
      <div v-highlight>
        <p>有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。</p>
        <pre>
          <code class="vue">
            const router = new VueRouter({
              routes: [
                {
                  path: '/user/:userId',
                  name: 'user',
                  component: User
                }
              ]
            })
          </code>
        </pre>
        <p>要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：</p>
        <pre>
          <code class="vue">
            &lt;router-link :to="{ name: 'user', params: { userId: 123 }}"&gt;User&lt;/router-link&gt;
          </code>
        </pre>
        <p>这跟代码调用 router.push() 是一回事：</p>
        <pre>
          <code class="vue">
            router.push({ name: 'user', params: { userId: 123 }})
          </code>
        </pre>
        <p>这两种方式都会把路由导航到 /user/123 路径。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bComponent",
  data() {
    return {
      title_1: "编程式导航",
      title_2: "命名路由",
      msg:'route',
    };
  },
  mounted() {
    console.info("子页面b");

  },
};
</script>
<style lang="scss" scoped>
</style>