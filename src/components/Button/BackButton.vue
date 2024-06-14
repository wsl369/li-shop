<script setup lang="ts"></script>

<template>
  <FixedButton class="back" @click="$router.back()">
    <SvgIcon name="back"></SvgIcon>
  </FixedButton>
</template>

<style lang="scss" scoped>
.back {
  top: 20rem;
  left: 20rem;
  svg {
    transform: translateX(20%);
  }
}
</style>
