<template>
    <div id="page1-a">
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    name:'aComponent',
    data(){
        return {
            title:'page-a'
        }
    },
    mounted() {
        console.info('子页面a')
    },
}
</script>
<style lang="scss" scoped>

</style>