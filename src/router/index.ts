import { useLoginUserStore } from '@/stores';
import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

const layout = () => import('@/layout/Layout.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Home.vue'),
        children: [
          {
            path: ':categoryId',
            component: () => import('@/views/home/Home.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'search',
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'cart',
        component: () => import('@/views/cart/Cart.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'user',
        component: () => import('@/views/User.vue'),
        meta: {
          needAuth: true,
        },
      },
    ],
  },
  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue'),
    props: true,
  },
  {
    path: '/login',
    component: () => import(`@/views/Auth.vue`),
  },
  {
    path: '/signup',
    component: () => import(`@/views/Auth.vue`),
  },
];
// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  const loginUser = useLoginUserStore();
  const notification = useNotificationStore();

  if (to.meta.needAuth) {
    if (!loginUser.isLogin) {
      notification.addNotice({
        id: Date.now(),
        msg: '请登录后访问',
        status: 'warning',
      });
      return '/login';
    }
  }
});
