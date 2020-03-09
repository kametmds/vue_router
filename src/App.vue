<template>
  <div class="div">
    <!-- router-viewが動的コンポーネントの役割をする。つまりurlによってコンポーネントの内容を変えてくれている -->
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view></router-view>
    </transition>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    }
  }
};
</script>

<style scoped>

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .div {
    width: 700px;
    margin: auto;
    padding-top: 50px;
  }

  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>