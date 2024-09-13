<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:19:42
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:19:47
-->
<template>
    <div>
        <p>当前温度：{{ temperature }}°C</p>
        <button @click="increaseTemp">增加温度</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义温度状态
const temperature = ref<number>(20)
// 定义增加温度的⽅法
const increaseTemp = (): void => {
    temperature.value++
}
</script>