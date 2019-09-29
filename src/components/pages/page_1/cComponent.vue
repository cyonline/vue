<template>
  <div class="page1-c" key="page1-c">
    <h1>{{title}}</h1>
     <div class="section_1">
      <h2>重定向</h2>
      <p>重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：</p>
      <div v-highlight>
        <pre>
          <code>
            const router = new VueRouter({
                routes: [
                    { path: '/a', redirect: '/b' }
                ]
            })
          </code>
        </pre>
      </div>
      <p>重定向的目标也可以是一个命名的路由：</p>
      <div v-highlight>
        <pre>
          <code>
            const router = new VueRouter({
                routes: [
                    { path: '/a', redirect: { name: 'foo' }}
                ]
            })
          </code>
        </pre>
      </div>
      <p>甚至是一个方法，动态返回重定向目标：</p>
      <div v-highlight>
        <pre>
          <code>
            const router = new VueRouter({
                routes: [
                    { path: '/a', redirect: to => {
                    // 方法接收 目标路由 作为参数
                    // return 重定向的 字符串路径/路径对象
                    }}
                ]
            })
          </code>
        </pre>
      </div>
    </div>
    <div class="section_2">
      <h2>别名</h2>
      <p>“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？</p>
      <b>/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。</b>
      <p>上面对应的路由配置为：</p>
      <div v-highlight>
        <pre>
          <code>
            const router = new VueRouter({
                routes: [
                    { path: '/a', component: A, alias: '/b' }
                ]
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "重定向和别名"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>