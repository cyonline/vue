<template>
  <div id="header">
      <ul>
          <li v-bind:class="{active:item.active}" v-for="item,index in nav" v-on:click="goPage(index)"><a>{{item.txt}}</a></li>
      </ul>
  </div>
</template>
<script>
export default {
    name:'cy-header',
    data(){
        return {
            title:'这是一个vue项目',
            className:'active',
            nav:[
                {'txt':'首页','active':true,'url':'index'},
                {'txt':'page1','active':false,'url':'1'},
                {'txt':'page2','active':false,'url':'2'},
                {'txt':'page3','active':false,'url':'3'},
                ],
            goPage:function(i){
                console.info(i)
                this.nav.forEach(ele=>{
                    ele.active = false
                })
                this.nav[i].active = true;
            }    
        }
    }
}
</script>
<style lang="scss" scoped>
    #header{
        height: 70px;
        width:100%;
        background:#41b883;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active{
        background:darken(#41b883,2);
    }

    ul{
       li{
           list-style:none;
           float:left;
           a{
               display:inline-block;
               width:100px;
               height:70px;
               line-height:70px;
               cursor: pointer;
               &:hover{
                   background:darken(#41b883,2)
               }
           }
       } 
    }
</style>
