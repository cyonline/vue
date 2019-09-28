<template>
    <div class="page_1">
        <div>从a页面获取的参数：{{msg}}</div>
        <p>this.$router是只写对象，通过this.$router.push({name:'d',params:{ name: 'cy',page: 'a'}})传参</p>
        <p>this.$route是只读对象，通过this.$route.params的方式接受路由传递过来的参数</p>
    </div>
</template>
<script>
export default {
    data (){
        return {
            msg:''
        }
    },
    mounted (){
        console.info(this.$route.params);
        this.msg = this.$route.params.name;
    }
}
</script>