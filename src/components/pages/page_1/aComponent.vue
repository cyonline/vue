<template>
  <div id="page1-a" key="page1-a">
    <h2>{{title}}</h2>
    <h4>表单元素</h4>
      <select v-model="type" @change="selectChange($event)">
        <option :value="item.id" v-for="(item,index) in option" :key="index">{{item.name}}</option>
      </select>
      select:{{ typeName }}
    <!-- </div> -->
    <h2>编程式导航</h2>
    <a href="javascript:;" @click="goB()">点我跳转d页面</a>
  </div>
</template>
<script>
import router from '../../../router';
export default {
  name: "aComponent",
  data() {
    return {
      title: "page-a",
      type: "0",
      typeName: "路飞",
    };
  },
  computed: {
    option: function() {
      let arr = [
        { id: "0", name: "路飞", sex: "0" },
        { id: "1", name: "索隆", sex: "0" },
        { id: "2", name: "娜美", sex: "1" }
      ];
      arr.forEach(ele => {
        ele["group"] = "caomao";
      });
      return arr;
    }
  },
  mounted() {
    // console.info('mounted');
    this.$watch("type", function(n, o) {
      console.info(n, o);
    });
  },
  methods: {
    selectChange(e) {
      console.log(e.target.value);
      this.option.forEach(ele => {
        if (e.target.value === ele.id) {
          this.typeName = ele.name;
        }
      });
    },
    goB() {
      this.$router.push({name:'d',params:{ name: 'cy',page: 'a'}})
    }
  }
};
</script>
<style lang="scss" scoped>
</style>