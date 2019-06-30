<template>
  <div id="app">
    <cy-header></cy-header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <cy-content></cy-content>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import cyHeader from './components/Header.vue';
import cyContent from './components/Content.vue';
export default {
  name: "app",
  components: {
    HelloWorld,
    cyHeader,
    cyContent
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin:0;
  padding:0;
}
</style>
