<template>
    <div class="container">
        <app-side :options="sideBar"></app-side>
        <app-content></app-content>
        <!-- <router-view></router-view> -->
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
                {'txt':'第一页','path':'/page_1/a'},
                {'txt':'第二页','path':'/page_1/b'},
                {'txt':'第三页','path':'/page_1/c'},
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
