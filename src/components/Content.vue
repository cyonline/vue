<template>
    <div id="content">
        <input type="text" v-model="name">{{name}}
        <input type="text" v-model="age">{{age}}
        <input type="text" v-model="sex">{{sex}}
        <select v-model="type">
            <option value="item.id" v-for="item in option" :key="item.id">{{item.name}}</option>
        </select>
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
            typeOption:[]
        }
    },
    computed: {
        option:function(){
        let arr = [
                    {'id':'0',name:'luffy','sex':'0'},
                    {'id':'1',name:'zoro','sex':'0'},
                    {'id':'2',name:'nami','sex':'1'},
            ]
            arr.forEach(ele => {
                ele['group'] = 'caomao';
            });
            return arr;
        }
    },
    mounted() {
        console.info('mounted');
    },
}
</script>

