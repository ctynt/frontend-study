<!--
 * @Author: ctynt
 * @Date: 2024-10-22 13:43:38
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-22 15:04:28
-->
<template>
    <div>
        <h2>欢迎来到个人中心</h2>
        <p>昵称：{{ user?.nickname }}</p>
        <img :src="user?.avatar" alt="avatar" width="100" height="100" />
        <p>积分{{ user?.bonus }}</p>
        <button @click="handleLogout">退出登录</button>

    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleLogout = () => {
    clearUser();
    router.push('/login')
}

import { useUserStore } from '../stores/useUser'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { fetchUser, clearUser } = userStore

onMounted(() => {
    fetchUser()
})

</script>

<style scoped></style>