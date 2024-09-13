<template>
    <div>
        <CustomInput v-model="inputText" />
        <p>输⼊的⽂本是：{{ inputText }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
// 定义输⼊⽂本的状态
const inputText = ref<string>('')
</script>