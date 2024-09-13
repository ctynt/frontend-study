<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:44:24
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:44:29
-->
<template>
    <button @click.once="handleClickOnce">点击⼀次</button>
    <p>{{ message }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义消息状态
const message = ref<string>('按钮还未点击')
// 事件处理函数
const handleClickOnce = (): void => {
    message.value = '按钮已被点击'
}
</script>
