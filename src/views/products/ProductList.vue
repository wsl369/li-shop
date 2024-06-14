<script setup lang="ts">
//创建ref数组
const products = ref<Product[]>([]);

const props = defineProps<{ keyword?: string }>();
//创建页码
const pageNumber = ref(1);
//获取router
const route = useRoute();

const url = computed(() => {
  if (route.params.categoryId) {
    return `products/category/${route.params.categoryId}&page=${pageNumber}`;
  } else if (props.keyword) {
    return `products/search?name=${props.keyword}&page=${pageNumber}`;
  } else {
    return `products?page=${pageNumber.value}`;
  }
});
//加载数据
// fetch(import.meta.env.VITE_BASE_API + '/products')
//   .then((res) => res.json() as Promise<Page<Product>>)
//   .then((data) => (products.value = data.data));

// const { data, loading } = useFetch<Page<Product>>(url);

//注入依赖
const { data, isFetching } = useFetch(url).json<Page<Product>>();
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE);

useInfiniteScroll(
  scrollEle,
  () => {
    if (data.value && pageNumber.value < data.value.totalPages) {
      pageNumber.value++;
    }
  },
  { distance: 100, interval: 200 }, //滚动加载距离  节流时差
);

watchEffect(() => {
  if (data.value) {
    if (data.value.currentPage === 1) {
      products.value = data.value.data;
    }
    products.value.push(...data.value.data);
  }
});

watch(
  () => props.keyword,
  () => {
    pageNumber.value = 1;
  },
);
//onBeforeRouteUpdate()
//组件内的导航守卫在路由组件更新前调用
onBeforeRouteUpdate(() => {
  pageNumber.value = 1;
});

//滚到最后使页码自增加载下一页
// onMounted(() => {
//   if (scrollEle) {
//     scrollEle.value.addEventListener('scroll', scrollHandler);
//   }
// });
// onUnmounted(() => {
//   if (scrollEle) {
//     scrollEle.value.removeEventListener('scroll', scrollHandler);
//   }
// });
</script>

<template>
  <div class="product-list">
    <router-link
      :to="`/product/${item.id}`"
      class="product"
      v-for="item in products"
      :key="item.id"
    >
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="price">{{ item.price.toFixed(2) }}</h3>
    </router-link>
  </div>
  <p class="msg" v-show="!isFetching && products.length === 0">---- 没有商品信息----</p>
  <p class="msg" v-show="isFetching">---- 加载中 ----</p>
  <p class="msg" v-show="!isFetching && data?.totalPages === pageNumber">---- 已加载到最后 ----</p>
  <back-top-button></back-top-button>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;

  .product {
    padding: 20rem;
    .img-wrap {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      overflow: hidden;
    }
    .name {
      font-size: 15rem;
      color: var(--light-color);
    }
    .price {
      &::before {
        content: '￥';
      }
    }
  }
}
.msg {
  text-align: center;
  font-size: 14rem;
}
</style>
