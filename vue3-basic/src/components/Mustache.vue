<!--
 * @Author: ctynt
 * @Date: 2024-09-10 08:33:14
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 08:41:29
-->
<template>
  <div>
    <h2>
      当前用户：{{ userName }}
    </h2>
    <p>2+3的结果是：{{ 2+3 }}</p>
    <p>全名：{{ firstName + lastName }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const userName= ref<string>('张三');
console.log(userName.value);
const firstName = ref<string>('张');
const lastName = ref<string>('三');

</script>