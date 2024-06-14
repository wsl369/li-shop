<script setup lang="ts">
const props = defineProps<{ count: number }>();
// const emit = defineEmits(['update:count']);
// const emit = defineEmits<{
//   (name: 'update:count', count: number): void;
// }>();
const emit = defineEmits<{
  'update:count': [count: number];
}>();
const count = computed({
  get() {
    return props.count;
  },
  set(value: number) {
    emit('update:count', value);
  },
});
</script>

<template>
  <div class="counter">
    <button :disabled="count <= 1" @click="count--"><SvgIcon name="remove"></SvgIcon></button>
    <input type="text" v-model="count" />
    <button @click="count++"><SvgIcon name="add"></SvgIcon></button>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  button {
    width: 20rem;
    height: 20rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--border-color);
    border-radius: 4px;
    font-size: 18rem;
  }
  input {
    outline: none;
    border: none;
    text-align: center;
    font-style: 14rem;
    width: 36rem;
  }
}
</style>
