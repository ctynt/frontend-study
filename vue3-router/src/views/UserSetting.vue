<template>
    <div>
        <h3>用户信息设置</h3>
        <button @click="handleLogout">退出登录</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
}

</script>
