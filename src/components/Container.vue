<template>
    <div class="container">
        <app-side :options="sideBar"></app-side>
        <app-content></app-content>
    </div>
</template>
<script>
import cySideBar from './SideBar.vue';
import cyContent from './Content.vue';

export default {
    name:'cy-container',
    components:{
        'app-side':cySideBar,
        'app-content':cyContent
    },
    data(){
        return{
            sideBar:[
                {'txt':'第一页','path':''},
                {'txt':'第二页','path':''},
                {'txt':'第三页','path':''},
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .container{
        width:100%;
        height: calc(100vh - 80px);
        background:#ddd;
        display: flex;
        // padding-top:10px;
        box-sizing: border-box;
    }
</style>
