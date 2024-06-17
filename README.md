
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
li-shop-main/
├── .env.development                    # 开发环境配置文件
├── .env.production                     # 生产环境配置文件
├── .eslintrc.cjs                       # ESLint 配置文件
├── .gitignore                          # Git 忽略文件配置
├── .prettierrc.json                    # Prettier 配置文件
├── README.md                           # 项目说明文件
├── env.d.ts                            # 环境变量类型声明文件
├── index.html                          # 项目入口 HTML 文件
├── package-lock.json                   # 锁定依赖版本文件
├── package.json                        # 项目依赖和配置信息
├── tsconfig.app.json                   # TypeScript 应用配置文件
├── tsconfig.json                       # TypeScript 全局配置文件
├── tsconfig.node.json                  # TypeScript Node.js 配置文件
├── vite.config.ts                      # Vite 配置文件
├── public/                             # 公共资源目录
│   └── favicon.ico                     # 网站图标文件
├── src/                                # 源代码目录
│   ├── App.vue                         # 根组件
│   ├── main.ts                         # 项目入口文件
│   ├── assets/                         # 静态资源目录
│   │   ├── styles/                     # 样式文件目录
│   │   │   ├── index.scss              # 主样式文件
│   │   │   └── variables.css           # 样式变量文件
│   │   └── svg/                        # SVG 文件目录
│   ├── components/                     # 公共组件目录
│   │   ├── Counter.vue                 # 计数器组件
│   │   ├── FormInput.vue               # 表单输入组件
│   │   ├── Hello.vue                   # 问候组件
│   │   ├── Button/                     # 按钮组件目录
│   │   │   ├── BackButton.vue          # 返回按钮组件
│   │   │   ├── BackTopButton.vue       # 返回顶部按钮组件
│   │   │   ├── BottomButton.vue        # 底部按钮组件
│   │   │   └── FixedButton.vue         # 固定按钮组件
│   │   ├── Notification/               # 通知组件目录
│   │   │   ├── Notification.vue        # 通知组件
│   │   │   └── NotificationItem.vue    # 通知项组件
│   ├── constant/                       # 常量目录
│   │   └── key.ts                      # 常量文件
│   ├── layout/                         # 布局组件目录
│   │   ├── BottomNav.vue               # 底部导航组件
│   │   └── Layout.vue                  # 布局组件
│   ├── router/                         # 路由配置目录
│   │   └── index.ts                    # 路由配置文件
│   ├── stores/                         # 状态管理目录
│   │   └── index.ts                    # 状态管理文件
│   ├── types/                          # 类型定义目录
│   │   ├── auto-imports.d.ts           # 自动导入类型定义
│   │   ├── components.d.ts             # 组件类型定义
│   │   ├── svg-component-global.d.ts   # 全局 SVG 组件类型定义
│   │   ├── svg-component.d.ts          # SVG 组件类型定义
│   │   └── types.d.ts                  # 全局类型定义
│   ├── utils/                          # 工具函数目录
│   │   └── useFetch.ts                 # 数据获取工具函数
│   ├── views/                          # 视图组件目录
│   │   ├── Auth.vue                    # 认证视图组件
│   │   ├── Product.vue                 # 产品视图组件
│   │   ├── Search.vue                  # 搜索视图组件
│   │   ├── User.vue                    # 用户视图组件
│   │   ├── cart/                       # 购物车视图组件目录
│   │   │   ├── Cart.vue                # 购物车组件
│   │   │   └── Cartlist/               # 购物车列表组件目录
│   │   │       └── Cartlist.vue        # 购物车列表组件
│   │   ├── home/                       # 主页视图组件目录
│   │   │   ├── CateforyList.vue        # 分类列表组件
│   │   │   └── Home.vue                # 主页组件
│   │   └── products/                   # 产品视图组件目录
│   │       └── ProductList.vue         # 产品列表组件
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
