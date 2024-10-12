<template>
    <div>
        <p>本地存储的值：{{ myData }}</p>
        <input type="text" v-model="myData" placeholder="更新本地存储的值">

    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '../composables/useLocalStorage';
const myData = useLocalStorage('username', '张三');
</script>

<style scoped>

</style>