
# Li-Shop 项目文档

## 概述

Li-Shop 是一个基于 Vue 3 的项目，具有用于电子商务应用程序的各种组件和功能。本文档提供了有关项目结构、主要功能、依赖项以及运行项目的说明的全面指南。

## 主要功能

### 主页
- 显示类别列表。
- 允许用户导航到特定类别页面。

### 搜索页面
- 提供搜索功能以查找产品。

### 购物车页面
- 显示用户的购物车。
- 允许用户管理购物车中的商品。

### 用户页面
- 显示用户信息。
- 需要身份验证才能访问。

### 产品页面
- 显示有关特定产品的详细信息。
- 允许用户根据产品 ID 查看产品详细信息。

### 身份验证页面
- 提供登录和注册功能。

## 项目结构

```
li-shop-main
├── .env.development
├── .env.production
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── README.md
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── main.ts
│   ├── assets
│   │   ├── styles
│   │   │   ├── index.scss
│   │   │   └── variables.css
│   │   └── svg
│   ├── components
│   │   ├── Counter.vue
│   │   ├── FormInput.vue
│   │   ├── Hello.vue
│   │   ├── Button
│   │   │   ├── BackButton.vue
│   │   │   ├── BackTopButton.vue
│   │   │   ├── BottomButton.vue
│   │   │   └── FixedButton.vue
│   │   ├── Notification
│   │   │   ├── Notification.vue
│   │   │   └── NotificationItem.vue
│   ├── constant
│   │   └── key.ts
│   ├── layout
│   │   ├── BottomNav.vue
│   │   └── Layout.vue
│   ├── router
│   │   └── index.ts
│   ├── stores
│   │   └── index.ts
│   ├── types
│   │   ├── auto-imports.d.ts
│   │   ├── components.d.ts
│   │   ├── svg-component-global.d.ts
│   │   ├── svg-component.d.ts
│   │   └── types.d.ts
│   ├── utils
│   │   └── useFetch.ts
│   ├── views
│   │   ├── Auth.vue
│   │   ├── Product.vue
│   │   ├── Search.vue
│   │   ├── User.vue
│   │   ├── cart
│   │   │   ├── Cart.vue
│   │   │   └── Cartlist
│   │   │       └── Cartlist.vue
│   │   ├── home
│   │   │   ├── CateforyList.vue
│   │   │   └── Home.vue
│   │   └── products
│   │       └── ProductList.vue
```
## 依赖项

该项目具有以下依赖项：

### 依赖项
- `@vueuse/core`: ^10.10.0
- `@vueuse/integrations`: ^10.10.0
- `async-validator`: ^4.2.5
- `normalize.css`: ^8.0.1
- `pinia`: ^2.1.7
- `vue`: ^3.4.21
- `vue-router`: ^4.3.0

### 开发依赖项
- `@rushstack/eslint-patch`: ^1.8.0
- `@tsconfig/node20`: ^20.1.4
- `@types/node`: ^20.12.5
- `@vitejs/plugin-vue`: ^5.0.4
- `@vue/eslint-config-prettier`: ^9.0.0
- `@vue/eslint-config-typescript`: ^13.0.0
- `@vue/tsconfig`: ^0.5.1
- `eslint`: ^8.57.0
- `eslint-plugin-vue`: ^9.23.0
- `npm-run-all2`: ^6.1.2
- `prettier`: ^3.2.5
- `sass`: ^1.77.4
- `typescript`: ~5.4.0
- `unplugin-auto-import`: ^0.17.6
- `unplugin-svg-component`: ^0.10.3
- `unplugin-vue-components`: ^0.27.0
- `vite`: ^5.2.8
- `vue-tsc`: ^2.0.11

## 项目设置

### 安装依赖项
```bash
npm install
```

### 编译和热重载以进行开发
```bash
npm run dev
```

### 编译和最小化以进行生产
```bash
npm run build
```

### 运行测试
```bash
npm run test
```

### 检测和修复文件
```bash
npm run lint
```

### 自定义配置
请参阅 [配置参考](https://vitejs.dev/config/)。
