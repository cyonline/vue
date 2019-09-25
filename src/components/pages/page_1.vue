<template>
    <div id="page_1">
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
        <h2>嵌套路由</h2>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
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