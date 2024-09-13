<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:09:02
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:09:34
-->
<template>
    <button>{{ customAttr }}</button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
// 使⽤ defineProps 声明⾃定义属性
defineProps<{
    customAttr: string
}>()
</script>