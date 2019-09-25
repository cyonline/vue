<template>
    <div id="page1-b">
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    name:'bComponent',
    data(){
        return {
            title:'page-b'
        }
    },
    mounted() {
        console.info('子页面b')
    },
}
</script>
<style lang="scss" scoped>

</style>