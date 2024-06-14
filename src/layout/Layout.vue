<script setup lang="ts">
const scrollEle = ref(null);

//设置scrollEle
provide(SCROLL_ELE, scrollEle);
</script>

<template>
  <div class="main" ref="scrollEle">
    <router-view></router-view>
  </div>

  <bottom-nav></bottom-nav>
</template>

<style lang="scss" scoped>
.main {
  position: static;
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}
</style>
