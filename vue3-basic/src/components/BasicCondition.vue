<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:15:29
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:23:51
-->
<template>
    <div>
        <p v-if="isVisibity">该文本可见</p>
        <p v-else>该文本隐藏</p>
        <button @click="toggleVisibity">切换</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisibity = ref<boolean>(true)

const toggleVisibity = (): void => {
    isVisibity.value = !isVisibity.value
}
</script>