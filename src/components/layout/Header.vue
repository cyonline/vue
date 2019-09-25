<template>
  <div id="header">
    <ul>
      <li
        v-bind:class="{active:item.active}"
        v-for="(item, index) in nav"
        :key="item.id"
        v-on:click="goPage(index)"
      >
        <router-link :to="item.url">{{item.txt}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "cy-header",
  data() {
    return {
      title: "这是一个vue项目",
      className: "active",
      nav: [
        { id: "0", txt: "首页", active: true, url: "" },
        { id: "1", txt: "page1", active: false, url: "/page_1" },
        { id: "2", txt: "page2", active: false, url: "/page_2" },
        { id: "3", txt: "page3", active: false, url: "/page_3" }
      ],
      goPage: function(i) {
        console.info(i);
        this.nav.forEach(ele => {
          ele.active = false;
        });
        this.nav[i].active = true;
      }
    };
  }
};
</script>
<style lang="scss" scoped>
#header {
  height: 70px;
  width: 100%;
  background: #41b883;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0px 6px 5px -7px #000;
}
.active {
  background: darken(#41b883, 2);
}

ul {
  li {
    list-style: none;
    float: left;
    a {
      display: inline-block;
      width: 100px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: darken(#41b883, 2);
      }
    }
  }
}
</style>
