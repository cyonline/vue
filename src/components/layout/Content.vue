<template>
  <div class="content">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "cy-content",
  data() {
    return {
      transitionName:''
    }
  },
  watch: {
  '$route' (to, from) {
    // console.info(to.name.charAtCode(0));
    const toDepth = to.path.split('/').pop().charCodeAt(0);
    const fromDepth = from.path.split('/').pop().charCodeAt(0);
    // console.info(toDepth,fromDepth)
    this.transitionName = toDepth < fromDepth ? 'slide-up' : 'slide-down'
  }
}
};
</script>
<style lang="scss" scoped>
.content {
  width: calc(100% - 15rem);
  height: calc(100% - 10px);
  box-sizing: border-box;
  padding: 10px;
  background: #fff;
  box-shadow: 5px 0px 7px #bbbbbb;
  border-radius: 5px;
  overflow-y: scroll;
}
.slide-up-enter-active {
  transition:transform 0.5s;
   transform:translateY(0);
}
.slide-up-leave-active {
   transition:transform 0.5s;
   transform:translateY(100%);
}
.slide-down-enter-active {
  transition:transform 0.5s;
   transform:translateY(0);
}
.slide-down-leave-active {
   transition:transform 0.5s;
   transform:translateY(-100%);
}

</style>
