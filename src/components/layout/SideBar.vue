<template>
  <div class="sideBar">
    <ul>
      <li v-for="(item, index) in options" :key="index">
        <a>
          <router-link :to="item.path">{{ item.txt }}</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "cy-sideBar",
  data() {
    return {};
  },
  props: ["options"]
};
</script>
<style lang="scss" scoped>
.sideBar {
  width: 15rem;
  height: calc(100% - 10px);
  overflow-y: scroll;
  background: #fff;
  margin-right: 10px;
  box-shadow: 5px 0px 7px #bbbbbb;
  border-radius: 5px;
  ul {
    width: 100%;
    margin: 0;
    padding: 1rem 0 1rem;
    li {
      list-style: none;
      // padding: 0 2rem;
      // border-top: 1px solid #ddd;
      &:first-child {
        border-top: 1px solid #ddd;
      }
      border-bottom: 1px solid #ddd;
      &.active,
      :hover {
        background: #41b883;
        color: #fff;
      }
      a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
        color: #000;
      }
    }
  }
}
</style>
