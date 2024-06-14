<script setup lang="ts"></script>

<template>
  <FixedButton class="button-cart">
    <slot></slot>
  </FixedButton>
</template>

<style lang="scss" scoped>
.button-cart {
  width: 335rem;
  height: 60rem;
  bottom: 70rem;
  left: 20rem;
}
</style>
