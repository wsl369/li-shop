<script setup lang="ts">
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE);
const { y } = useScroll(scrollEle, { behavior: 'smooth' });
const showBtn = computed(() => y.value > 300);
</script>

<template>
  <FixedButton @click="y = 0" v-show="showBtn" class="back-top">
    <SvgIcon name="up"></SvgIcon>
  </FixedButton>
</template>

<style lang="scss" scoped>
.back-top {
  bottom: 80rem;
  right: 10rem;
}
</style>
