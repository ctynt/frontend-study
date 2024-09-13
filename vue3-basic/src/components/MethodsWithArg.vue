<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:21:21
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:21:26
-->
<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="incrementBy(5)">增加 5</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义计数状态
const count = ref<number>(0)
// 定义带参数的⽅法
const incrementBy = (value: number): void => {
    count.value += value
}
</script>