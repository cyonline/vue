<template>
    <div class="header">
        <ul>
            <li>
                <a v-for="item in navList" v-bind:key="item.id">{{item.txt}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'cy-header',
            navList:[
                {'id':'0','txt':'首页','url':'index'},
                {'id':'1','txt':'其他1','url':'page1'},
                {'id':'2','txt':'其他2','url':'page2'},
            ]
        }
    },
    computed(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    .header{
        width:100%;
        height:70px;
        background:#41b883;
        ul{
            li{
                float:left;
                list-style:none;
                a{
                    display:inline-block;
                    width:80px;
                    height:70px;
                    color:#fff;
                    line-height:70px;
                }
            }
        }
    }
</style>

