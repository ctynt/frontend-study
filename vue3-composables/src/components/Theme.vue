<template>
    <div class="app">
        <h1>当前主题: {{ isDark ? '夜间' : '白天' }}</h1>
        <button @click="() => toggleDark()">{{ isDark ? 'dark' : 'light' }}</button>
    </div>

</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

// dark样式示例
<style lang="scss">
// (推荐写在全局样式中)
html.dark {
    background-color: #000;
    color: #fff;
}
</style>
