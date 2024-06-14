<script setup lang="ts">
const props = defineProps<{
  msg: string;
  status: NoticeStatus;
  index: number;
}>();
</script>

<template>
  <div class="item">
    <SvgIcon v-if="status == 'success'" name="check"></SvgIcon>
    <SvgIcon class="warning" v-if="status == 'warning'" name="cancel"></SvgIcon>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  z-index: 100;
  width: 335rem;
  height: 50rem;
  position: fixed;
  border-radius: 8px;
  background-color: var(--primary-color);
  left: 20rem;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  top: calc(v-bind(index) * 60rem);
  svg {
    font-size: 34rem;
    color: var(--success-color);
    &.warning {
      color: var(--warning-color);
    }
  }
  .msg {
    font-size: 20rem;
    margin-left: 10rem;
    color: var(--secondary-color);
  }
}
</style>
