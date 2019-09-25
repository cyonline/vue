<template>
  <div id="app">
    <cy-header></cy-header>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <cy-container></cy-container>
    <!-- <cy-sideBar :options="sideBar"></cy-sideBar>
    <cy-content :data='1'></cy-content> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import cyHeader from './components/layout/Header.vue';
import Container from './components/layout/Container.vue'
import cySideBar from './components/layout/SideBar.vue';
import cyContent from './components/layout/Content.vue';
export default {
  name: "app",
  components: {
    // HelloWorld components 里应该是对象的形式,写成一个是因为键名和键值相同
    // 'HelloWorld':HelloWorld,
    'cy-header':cyHeader,
    'cy-content':cyContent,
    'cy-sideBar':cySideBar,
    'cy-container':Container
  },
  data(){
    return {
      
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin:0;
  padding:0;
  background:#ddd;
}
</style>
