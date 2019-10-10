<template>
  <div class="article">
    <a class="button" @click="goBack">返回</a>
    <h2>{{title}}</h2>
    <article>
        {{content}}
    </article>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data(){
    return {
      content:'',
      title:'',
    }
  },
  mounted() {
    this.title = this.$route.params.title;
    this.getContent();
  },
  methods: {
    getContent (){
      Axios.get("/news/content").then(res=>{
        console.info(res);
        this.content = res.data.content;
      })
    },
    goBack(){
      this.$router.go(-1);
    }
  },
}
</script>
<style lang="scss" scoped>
  .article{
    width:100%;
    height: calc(100% - 20px);
  }
  .button {
    display: inline-block;
    margin-left:10px;
    width:80px;
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    background:#41c883;
    border-radius: 3px;
    color: #fff;
    font-size:0.9rem;
    cursor: pointer;
    &:active{
      background: darken( #41b883, 4)
    }
  }
</style>