//创建一个存储用户信息的store
export const useLoginUserStore = defineStore('loginuser', {
  state: () => {
    return {
      loginUser: useLocalStorage<LoginUser>('loginuser', {}),
    };
  },

  getters: {
    isLogin: (state) => {
      return 'token' in state.loginUser && 'user' in state.loginUser;
    },
  },
  actions: {
    login(loginUser: LoginUser) {
      this.loginUser = loginUser;
    },
    logout() {
      this.loginUser = {};
    },
  },
});

//创建一个存储Notification的store
export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      items: [] as Notice[], //通知
    };
  },

  actions: {
    addNotice(notice: Notice) {
      this.items.push(notice);
      //移除通知栏
      setTimeout(
        () => {
          this.removeNotice(notice.id);
        },
        notice.duration ? notice.duration : 3000,
      );
    },
    removeNotice(id: number) {
      this.items = this.items.filter((item) => {
        item.id != id;
      });
    },
  },
});

export const useCarStore = defineStore('cart', {
  state: () => {
    /*
    {
        itemss:cartItem[]
        totalcount:number
        totalprice:number

    }
    */
    return {
      items: useLocalStorage<CartItem[]>('cart', []),
    };
  },
  getters: {
    totalCount: (state) => {
      return state.items.reduce((a, b) => a + b.count, 0);
    },
    totalPrice: (state) => {
      return state.items.reduce((a, b) => a + b.price * b.count, 0);
    },
  },
  actions: {
    //添加商品
    additems(product: Product, count: number) {
      if (count <= 0) return;
      //从购物车查询商品
      const cartItem = this.items.find((items) => items.id === product.id);
      if (cartItem) {
        const newCount = cartItem.count + count;
        if (newCount < cartItem.count) {
          cartItem.count = newCount;
        } else {
          cartItem.count = cartItem.stock;
        }
      } else {
        count = count <= product.stock ? count : product.stock;
        this.items.push({ ...product, count });
      }
    },
    //删除商品
    removeItems(id: number) {
      this.items = this.items.filter((items) => items.id != id);
    },
    //清空购物车
    clearCart() {
      this.items = [];
    },
  },
});
