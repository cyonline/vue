<template>
    <div class="content">
        <div>
            从父组件拿到的数据: prop:{{data}}
        </div>
        <div>
        <h4>表单元素</h4>
        <!-- <input type="text" v-model="name">{{name}}
        <input type="text" v-model="age">{{age}}
        <input type="text" v-model="sex">{{sex}} -->
        <select v-model="type"  @change="selectChange($event)">
            <option :value="item.id" v-for="(item,index) in option" :key="index">{{item.name}}</option>
        </select>
        select:{{typeName}}
        </div>
        <h2>路由router</h2>
        <!-- <router-link to="/page_1">点击我跳转第一个页面</router-link> -->
        <router-view class="view"></router-view>
    </div>
</template>
<script>
export default {
    name:'cy-content',
    data(){
        return {
            name:'',
            age:'',
            sex:'',
            type:'0',
            typeName:'路飞',
            typeOption:[]
        }
    },
    props:['data'],
    computed: {
        option:function(){
        let arr = [
                    {'id':'0',name:'路飞','sex':'0'},
                    {'id':'1',name:'索隆','sex':'0'},
                    {'id':'2',name:'娜美','sex':'1'},
            ]
            arr.forEach(ele => {
                ele['group'] = 'caomao';
            });
            return arr;
        }
    },
    mounted() {
        // console.info('mounted');
        console.info(this.data);
        this.$watch('type',function(n,o){
            console.info(n,o);
        })
    },
    methods: {
        selectChange(e){
            console.log(e.target.value);
            this.option.forEach(ele=>{
                if(e.target.value === ele.id){
                    this.typeName = ele.name
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .content{
        width:calc(100% - 15rem);
        height:calc(100% - 10px);
        box-sizing: border-box;
        padding:10px;
        background:#fff;
        box-shadow: 5px 0px 7px #bbbbbb;
        border-radius: 5px;
    }
</style>
