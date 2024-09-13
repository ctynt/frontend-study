<!--
 * @Author: ctynt
 * @Date: 2024-09-10 13:45:54
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:25:27
-->
<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} - {{ user.age }} 岁

        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
    id: number
    name: string
    age: number
}

const users = ref<User[]>([
    { id: 1, name: '张三', age: 25 },
    { id: 2, name: '李四', age: 30 },
    { id: 3, name: '王五', age: 35 }
])
</script>