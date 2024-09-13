<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:41:27
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:41:32
-->
<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="inputValue" placeholder="输⼊内容" />
        <button type="submit">提交</button>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义输⼊框状态
const inputValue = ref<string>('')
// 提交事件处理函数
const handleSubmit = (): void => {
    console.log(`提交的内容：${inputValue.value}`)
}
</script>