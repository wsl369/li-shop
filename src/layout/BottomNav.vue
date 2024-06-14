<script setup lang="ts"></script>

<template>
  <div class="bottom-nav">
    <router-link to="/home"><svg-icon name="home"></svg-icon></router-link>
    <router-link to="/search"><svg-icon name="search"></svg-icon></router-link>
    <router-link to="/cart"><svg-icon name="cart"></svg-icon></router-link>
    <router-link to="/user"><svg-icon name="user"></svg-icon></router-link>
  </div>
</template>

<style lang="scss" scoped>
.bottom-nav {
  width: 375rem;
  height: var(--bottom-nav-height);
  border-top: 1px var(--border-color) solid;
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 1px var(--border-color) solid;
  background-color: var(--secondary-color);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    font-size: 26rem;
    &.router-link-active {
      color: var(--height-color);
    }
  }
}
</style>
