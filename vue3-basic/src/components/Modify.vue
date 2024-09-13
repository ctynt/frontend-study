<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:55:49
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:55:54
-->
<template>
    <div>
        <input v-model.trim="username" placeholder="请输⼊⽤户名" />
        <p>您的⽤户名是：{{ username }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⽤户名的状态
const username = ref<string>('') // 初始值为空字符串
</script>