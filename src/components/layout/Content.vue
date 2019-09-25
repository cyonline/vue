<template>
    <div class="content">
        <router-view class="view"></router-view>
    </div>
</template>
<script>
export default {
    name:'cy-content',
    
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
