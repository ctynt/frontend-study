<!--
 * @Author: ctynt
 * @Date: 2024-09-12 17:51:54
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:55:16
-->
<template>
    <div>
        <label>
            <input type="checkbox" v-model="selectedFruits" value="苹果" />
            苹果
        </label>
        <label>
            <input type="checkbox" v-model="selectedFruits" value="⾹蕉" />
            ⾹蕉
        </label>
        <label>
            <input type="checkbox" v-model="selectedFruits" value="橘⼦" />
            橘⼦
        </label>
        <p>您选择的⽔果：{{ selectedFruits.join(', ') }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 选中的⽔果会以数组的形式存储
const selectedFruits = ref<string[]>([]) // 初始值为空数组
</script>