import Vue from "vue";

Vue.component("table-test",{
    data:function(){
        return {
            user:{
                name:'',
                sex:'',
                age:'',
            }
        }
    },
    template:`<div class="page_2_a">
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
  </div>`
})