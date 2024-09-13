<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("孙悟空");
const title = ref<string>("齐天大圣");
const description = ref<string>(
  "在《西游记》中，孙悟空是一个勇敢无畏、机智聪明的角色"
);
</script>

<style scoped>
div {
    background-color: #fff;
    border-radius: 50rpx;
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

h1, h2, p {
    text-align: center;
}

h2 {
    color: orange;
}
</style>