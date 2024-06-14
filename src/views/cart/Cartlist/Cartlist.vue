<script setup lang="ts">
const cart = useCarStore();
</script>

<template>
  <div class="cart-list">
    <div class="cart-item" v-for="item in cart.items" :key="item.id">
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <div class="product-info">
        <router-link :to="`/product/${item.id}`" class="name">{{ item.name }}</router-link>
        <Counter v-model:count="item.count"></Counter>
        <p class="price">
          {{ item.price.toFixed(2) }}
        </p>
      </div>
      <SvgIcon @click="cart.removeItems(item.id)" name="cancel"></SvgIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-list {
  height: 60vh;
  overflow: auto;
  margin: 0 20rem;

  .cart-item {
    display: flex;
    padding: 20rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
    .img-wrap {
      width: 100rem;
      margin-right: 20rem;
    }
    .product-info {
      flex: auto;
      .name {
        display: block;

        font-size: 14rem;
        margin-bottom: 10rem;
        font-weight: bold;
      }
      .price {
        margin-top: 10rem;
        font-size: 13rem;
        &::before {
          content: '￥';
        }
      }
    }
    svg {
      font-size: 20rem;
      margin-right: 20rem;
    }
  }
}
</style>
