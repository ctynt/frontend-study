<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:46:29
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:47:14
-->
<template>
    <Child @notify="handleNotification" />
    <p>{{ message }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'
// 定义接收的消息状态
const message = ref<string>('等待⼦组件通知')
// 处理来⾃⼦组件的通知
const handleNotification = (msg: string): void => {
    message.value = msg
}
</script>