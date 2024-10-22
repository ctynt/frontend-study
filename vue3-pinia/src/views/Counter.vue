<template>
  <div>
      <h2>计数器{{ counterStore.count }}</h2>
      <h2>双倍计数器：{{ counterStore.doubleCounter }}</h2>
      <button @click="counterStore.increment">增加</button>
      <button @click="counterStore.decrement">减少</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/useCounter';

// 使用useCounterStore
const counterStore = useCounterStore();

</script>

<style scoped></style>

