<template>
    <div class="user-profile">
        <h3>用户信息</h3>
        <p>姓名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <p>邮箱：{{ user.email }}</p>
    </div>
</template>

<script setup lang="ts">
// 定义props，接受父组件传递的参数
const props = defineProps<{
    user: {
        name: string,
        age: number,
        email: string
    }
}>()

</script>

<style scoped>
.user-profile {
    min-width: 300px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>