<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:43:24
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:43:30
-->
<template>
    <div @click="handleOuterClick">
        <button @click.stop="handleButtonClick">点击按钮</button>
    </div>
</template>
<script setup lang="ts">

// 处理外层 div 的点击事件
const handleOuterClick = (): void => {
    alert('点击了外层 div')
}
// 处理按钮的点击事件
const handleButtonClick = (): void => {
    alert('点击了按钮')
}
</script>