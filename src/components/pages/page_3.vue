<template>
  <div class="page_3">
    <router-view></router-view>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      title: "axios",
      data: ""
    };
  },
};
</script>
<style lang="scss" scoped>
.page_3 {
  width: 100%;
  height: calc(100vh - 80px);
  // display: flex;
  box-sizing: border-box;
  padding: 10px;
  .container {
    background: #fff;
    height:100%;
    width:100%;
    border-radius: 5px;
  }
}
.search{
  width: 100%;
  height:10%;
  display: flex;
  align-items:center;
  padding-left:10px;
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
}
.list {
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  padding: 0 10px;
  box-sizing: border-box;
  .list-item {
    width: 100%;
    height: 10vw;
    display: flex;
    border-radius: 5px;
    border: 1px solid #ddd;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 10px;
    .photo {
      width: 10vw;
      height: 100%;
      img{
        width:100%;
        height:100%;
      }
    }
    .des {
      width: calc(100% - 10vw);
      height: 100%;
      padding:20px;
      box-sizing: border-box;
    }
  }
  &::-webkit-scrollbar {
    height: 90%;
    padding: 10% 0;
    box-sizing: border-box;
  }
}
</style>
