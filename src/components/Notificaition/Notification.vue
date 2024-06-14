<script setup lang="ts">
const notification = useNotificationStore();
const addHandler = () => {
  notification.addNotice({
    id: Date.now(),
    msg: '通知信息',
    status: 'success',
    duration: 3000,
  });
};
</script>

<template>
  <TransitionGroup
    ><NotificationItem
      class="item"
      v-for="(item, index) in notification.items"
      :key="item.id"
      :msg="item.msg"
      :status="item.status"
      :index="index"
    ></NotificationItem
  ></TransitionGroup>
</template>

<style lang="scss" scoped>
.item {
  transition: all 0.5s;
}
.v-leave-to,
.v-enter-from {
  transform: translateY(-100rem);
  opacity: 0;
}
</style>
