<!--
 * @Author: ctynt
 * @Date: 2024-09-12 18:03:36
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 18:03:40
-->
<template>
    <div>
        <DateTimePicker v-model="date" v-model:timeValue="time" />
        <p>⽇期：{{ date }}</p>
        <p>时间：{{ time }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DateTimePicker from './DateTimePicker.vue'
// 定义⽇期和时间的状态
const date = ref<string>('')
const time = ref<string>('')
</script>