<script setup lang="ts">
const cart = useCarStore();
</script>

<template>
  <h2 class="title">购物车</h2>
  <div v-if="cart.items.length > 0">
    <Cartlist></Cartlist>
    <div class="cart-info">
      <div class="total-price">{{ cart.totalPrice.toFixed(2) }}</div>
    </div>
    <BottomButton>结账</BottomButton>
  </div>
  <p v-else class="msg">--购物车没有商品--</p>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 26rem;
}
.cart-info {
  margin-top: 20rem;
  padding: 20rem 20rem 0;
  border-top: 1px dotted var(--border-color);
  font-size: 20rem;
  text-align: right;
  .total-price::before {
    content: '￥';
    font-size: 24rem;
  }
}
.msg {
  text-align: center;
  font-size: 30rem;
}
</style>
