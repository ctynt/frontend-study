<template>
    <div>
        <p>当前计数器的值：{{ count }}</p>
        <button @click="increatment">增加</button>
        <button @click="decreatment">减少</button>
        <button @click="reset">清空</button>


    </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter';

const { count, increatment, decreatment,reset } = useCounter();
</script>

<style scoped>

</style>