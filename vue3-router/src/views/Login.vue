<template>
    <div>
        <h3>用户登录</h3>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
    // 模拟登录成功，存储用户登录状态
    localStorage.setItem('token', 'hello123')

    // 跳转到用户个人中心
    router.push("/user/profile")
}

</script>
