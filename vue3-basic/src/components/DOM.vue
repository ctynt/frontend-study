<!--
 * @Author: ctynt
 * @Date: 2024-09-12 18:04:24
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 18:04:28
-->
<template>
    <div ref="box" class="box">我是⼀个⽅块</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 获取 DOM 元素引⽤
const box = ref<HTMLDivElement | null>(null)
// 在组件挂载后操作 DOM
onMounted(() => {
    if (box.value) {
        box.value.style.backgroundColor = 'lightblue' // 修改⽅块的背景⾊
    }
})
</script>
<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: gray;
}
</style>