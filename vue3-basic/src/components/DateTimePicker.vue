<!--
 * @Author: ctynt
 * @Date: 2024-09-12 18:02:33
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 18:02:37
-->
<template>
    <input type="date" :value="modelValue" @input="$emit('update:modelValue', $event.target.value )" />
    <input type="time" :value="timeValue" @input="$emit('update:timeValue', $event.target.value )" />
</template>
<script setup lang="ts">
defineProps({
    modelValue: String,
    timeValue: String
})
</script>
