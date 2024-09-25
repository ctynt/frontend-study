<!--
 * @Author: ctynt
 * @Date: 2024-09-24 08:23:23
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-24 08:24:32
-->
<template>
    <div>
        <UserProfile :user="myUser" />

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';

const myUser = ref({
    name: "张三",
    age: 18,
    email: "zhangsan@qq.com"
})
</script>

<style scoped></style>