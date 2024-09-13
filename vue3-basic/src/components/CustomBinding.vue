<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:09:14
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:09:18
-->
<template>
    <div>
        <CustomButton :custom-attr="customValue">⾃定义按钮</CustomButton>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'
// ⾃定义属性值
const customValue = ref<string>('我是⾃定义属性')
</script>