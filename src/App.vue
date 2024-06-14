<script setup lang="ts"></script>

<template>
  <notification></notification>

  <router-view></router-view>
</template>
<!-- 
  style设置scoped后，样式只会在当前组件生效
  实现原理是
    vue为当前组件中所有元素添加一个唯一属性
    设置样式时，所有选择器都会被添加一个属性选择器
    除了为组件元素设置属性外也会为子组件添加属性  
 -->
<style lang="sscss" scoped></style>
