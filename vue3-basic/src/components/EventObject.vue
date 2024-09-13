<template>
    <button @click="handleClick">点击获取⿏标坐标</button>
    <p>点击位置：X: {{ x }}, Y: {{ y }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⿏标点击位置状态
const x = ref<number>(0)
const y = ref<number>(0)
// 处理点击事件并获取⿏标点击位置
const handleClick = (event: MouseEvent): void => {
    x.value = event.clientX
    y.value = event.clientY
}
</script>