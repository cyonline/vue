<template>
  <div id="page_2">
    <div class="list">
      <ul>
        <li>姓名：<a href="javascript:;">{{user.name}}</a></li>
        <li>性别：<a href="javascript:;">{{user.sex}}</a></li>
        <li>年龄：<a href="javascript:;">{{user.age}}</a></li>
      </ul>
    </div>
    <div class="view">
       <table-test v-on:user-data="getUser"></table-test>  
    </div>
    
  </div>
</template>
<script>
import tableTest from "./page_2/page_2_b"

export default {
  components:{
    tableTest
  },
  data() {
    return {
      title: "page_2",
      user:{
        'name':'',
        'age':'',
        'sex':''
      }
    };
  },
  methods: {
    getUser:function(e) {
        console.info(e);
        this.user = JSON.parse(JSON.stringify(e));
        console.info(this.user);
        // this.user.name = e.name;
        // this.user.age = e.age;
        // this.user.sex = e.sex;
      }
  },
   
};
</script>
<style lang="scss" scoped>
#page_2{
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  box-sizing: border-box;
}
.list{
  display: inline-block;
  width: 50%;
  height:100%;
  padding:10px;
  box-sizing: border-box;
  ul{
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
}
.a {
  width: 50%;
  background:green;
}
.b {
  width: 50%;
  background:blue;
}
.view {
 display: inline-block;
 width: 50%;
 padding: 10px;
 box-sizing: border-box;
}
</style>