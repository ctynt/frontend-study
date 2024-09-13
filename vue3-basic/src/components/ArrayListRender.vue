<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:42:51
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:24:50
-->
<template>
  <ul>
    <li v-for="(item,index) in items" :key="index">{{ item }}</li>
  </ul>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref<string[]>(['苹果','香蕉','橘子'])
</script>