<script setup lang="ts">
import { useLoginUserStore } from '@/stores';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator';
import type { Rules } from 'async-validator';

const rules = computed(() => {
  let rules: Rules = {
    username: [
      {
        type: 'string',
        required: true,
        message: '用户名是必须的',
      },
      {
        min: 4,
        message: ' 最小长度四位',
      },
      {
        pattern: /^[a-zA-Z]+[a-zA-Z0-9_]*$/,
        message: '必须为字母开头，可以包含数字和下划线',
      },
    ],

    email: {
      type: 'email',
      message: '请输入正确的邮件',
      required: true,
    },
    password: [
      {
        required: true,
        message: '密码必须填写',
      },
      {
        min: 8,
        message: '密码不能小于8位',
      },
    ],
    confirmPassword: [
      {
        required: true,
        message: '请确认密码',
      },
      {
        validator(rule, value, callback, source) {
          if (value != '' && value != source.password) {
            callback('俩次密码输入不一致');
          } else {
            callback();
          }
        },
      },
    ],
  };

  if (isLogin.value) {
    rules = {
      email: {
        required: true,
        type: 'email',
        message: '请输入正确邮件',
      },
      password: {
        required: true,
        message: '请输入正确密码',
      },
    };
  }
  return rules;
});
const route = useRoute();

const isLogin = computed(() => route.path === '/login');

const formData = reactive({ username: ' ', email: '', password: '', confirmPassword: '' });

const { pass, errorFields } = useAsyncValidator(formData, rules);

const url = computed(() => {
  if (isLogin) {
    return 'users/login';
  } else {
    return 'users/signup';
  }
});
//使用usefetch发送请求
const { execute } = useFetch(url, { immediate: false });

const notification = useNotificationStore();

const loginUser = useLoginUserStore();

const router = useRouter();
//创建表单提交的回调函数
const submitHandler = () => {
  if (isLogin.value) {
    execute()
      .then((res) => res.json())
      .then((json) => {
        //登陆成功，将用户存到本地存储
        loginUser.login(json);
        notification.addNotice({
          id: Date.now(),
          msg: '欢迎回来',
          status: 'success',
        });
        router.push('/user');
      })
      .catch(() => {
        notification.addNotice({
          id: Date.now(),
          msg: '用户名或密码错误',
          status: 'warning',
          duration: 5000,
        });
      });
  }
};
</script>

<template>
  <div class="auth">
    <BackButton></BackButton>
    <h1 class="info">
      <template v-if="isLogin"> 您好，欢迎回来 </template>
      <template v-else> 欢迎加入 </template>
    </h1>
    <form @submit.prevent="submitHandler">
      <FormInput
        :error="errorFields?.username"
        v-model.trim="formData.username"
        label="请输入用户名"
        v-if="!isLogin"
      ></FormInput>
      <FormInput
        :error="errorFields?.email"
        v-model.trim="formData.email"
        label="请输入邮箱地址"
        type="password"
      ></FormInput>
      <FormInput
        :error="errorFields?.password"
        v-model.trim="formData.password"
        label="请输入密码"
        type="password"
        toggle
      ></FormInput>
      <FormInput
        :error="errorFields?.confirmPassword"
        v-model.trim="formData.confirmPassword"
        v-if="!isLogin"
        label="请确认密码"
        type="password"
        toggle
      ></FormInput>
      <p>
        <template v-if="isLogin">
          还没有账号？ <router-link to="/signup">注册</router-link></template
        >
        <template v-else> 已有账号？<router-link to="/login">登录</router-link> </template>
      </p>
      <BottomButton :disabled="!pass">
        <template v-if="isLogin"> 登录 </template>
        <template v-else> 注册 </template>
      </BottomButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  padding: 40rem 20rem 0;
  .info {
    font-size: 30rem;
  }
  p {
    font-size: 20rem;
    a {
      color: var(--warning-color);
    }
  }
}
</style>
