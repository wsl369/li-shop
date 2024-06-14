<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: fixed;
  width: 30rem;
  height: 30rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 6px;
  color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24rem;
  svg {
    transform: translateX(20%);
  }
  &:disabled {
    background-color: var(--light-color);
  }
}
</style>
