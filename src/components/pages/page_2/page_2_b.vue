<template>
  <div class="page_2_b">
    <h2>这是子组件</h2>
    <p>在下面表单中填写信息,提交后会显示在父组件中</p>
    <div class="input_Item"> 
      姓名：
      <input type="text" v-model="user.name" />
    </div>
    <div class="input_Item">
      性别：
      <input type="text" v-model="user.sex" />
    </div>
    <div class="input_Item">
      年龄：
      <input type="text" v-model="user.age" />
    </div>
    <div class="input_Item">
        <button v-on:click="submit()">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tableTest',
  data() {
    return {
        user:{
            name:'',
            sex:'',
            age:''
        }
    };
  },
  mounted() {
    console.info("page_2_b");
  },
  methods: {
      submit:function() {
        console.info(this.user);
        //  暴露的方法名 user
        this.$emit('user-data',this.user);
      }
  }
};
</script>
<style lang="scss" scoped>
.page_2_b {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>