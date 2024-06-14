<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();
const { data, error } = useFetch(`products/${props.id}`).json<Product>();

const count = ref(1);
//获取cart的store
const cart = useCarStore();
const notification = useNotificationStore();

const addCarHandler = (product: Product) => {
  cart.additems(product, count.value);
  router.push('/cart');
  notification.addNotice({
    id: Date.now(),
    msg: '添加成功',
    status: 'success',
    duration: 3000,
  });
};
</script>

<template>
  <div class="product">
    <BackButton></BackButton>
    <template v-if="!error && data">
      <div>
        <div class="img-wrap">
          <img :src="data.image_url" :alt="data.name" />
        </div>
        <div class="desc-wrap">
          <h2 class="name">{{ data.name }}</h2>
          <h3 class="price">{{ data.price.toFixed(2) }}</h3>
          <Counter v-model:count="count"></Counter>
          <p class="desc">
            {{ data.description }}
          </p>
        </div>
        <BottomButton @click="addCarHandler(data)">加入购物车</BottomButton>
      </div>
    </template>
    <p v-else-if="error">---- 数据异常 ----</p>
  </div>
</template>

<style lang="scss" scoped>
.product {
  .desc-wrap {
    padding: 20rem;
  }

  .name {
    font-size: 20rem;
    &::before {
      content: '￥';
    }
  }
  .desc {
    color: var(--light-color);
    font-style: 12rem;
  }
}
</style>
