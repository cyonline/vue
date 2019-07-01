<template>
  <div id="app">
    <cy-header></cy-header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CyHeader from "./components/cy-header.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CyHeader
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
body{
  margin:0;
  padding:0;
}
</style>
