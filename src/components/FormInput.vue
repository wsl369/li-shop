<script setup lang="ts">
import type { ValidateError } from 'async-validator';

const props = withDefaults(
  defineProps<{
    type?: 'text' | 'password';
    label: string;
    error?: ValidateError[];
    modelValue?: string;
    toggle?: boolean;
  }>(),
  { type: 'text' },
);

const type = ref(props.type);
</script>

<template>
  <div :class="{ 'inp-wrap': true, error: error }">
    <input
      :type="type"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <ul v-if="error">
      <li v-for="e in error" :key="e.message">{{ e.message }}</li>
    </ul>
    <SvgIcon v-show="toggle && type == 'password'" name="noeye" @click="type = 'text'"></SvgIcon>
    <SvgIcon v-show="toggle && type == 'text'" name="eye" @click="type = 'password'"></SvgIcon>
  </div>
</template>

<style lang="scss" scoped>
.inp-wrap {
  margin: 30rem 0;
  position: relative;
  input {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--border-color);
    height: 50rem;
    font-size: 20rem;
  }
  svg {
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: 15rem;
  }
}
.error {
  input {
    border-color: var(--hilight-color);
  }
  ul {
    font: size 14rem;
    color: var(--hilight-color);
    list-style: none;
    padding: 0;
  }
}
</style>
