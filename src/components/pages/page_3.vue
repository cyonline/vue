<template>
  <div class="page_3">
    <h2>{{ title }}</h2>
    <button @click="getData">获取数据</button>
    <p>res.data:{{data}}</p>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      title: "axios",
      data: ""
    };
  },
  methods: {
    getData() {
      Axios.get('http://192.168.0.66:8000/static/user.json',{}).then(res => {
        console.info(res.data);
        this.data = res.data
      })
    }
  },
};
</script>
<style lang="scss" scoped>
  .page_3{
    padding: 10px;
  }
</style>
