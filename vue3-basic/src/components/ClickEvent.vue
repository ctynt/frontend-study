<template>
    <button @click="handleClick">点击我</button>
    <p>{{ message }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个消息状态
const message = ref<string>('还没有点击按钮')
// 事件处理函数
const handleClick = (): void => {
    message.value = '按钮已被点击'
}
</script>
