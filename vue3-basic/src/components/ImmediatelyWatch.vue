<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:36:23
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:36:28
-->
<template>
    <div>
        <input v-model="userName" placeholder="输⼊⽤户名" />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// ⽤户名状态
const userName = ref<string>('张三')
// ⽴即执⾏监听器
watch(userName, (newName) => {
    console.log(`⽤户名为：${newName}`)
}, { immediate: true })
</script>