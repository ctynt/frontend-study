<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:26:52
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:26:57
-->
<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ index + 1 }}. {{ item }}
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个字符串数组状态
const items = ref<string[]>(['HTML', 'CSS', 'JavaScript'])
</script>