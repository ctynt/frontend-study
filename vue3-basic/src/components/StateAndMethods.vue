<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:14:34
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 10:21:13
-->
<template>
    <div>
        <p>当前用户：{{ user.name }}，年龄：{{  user.age}}</p>
        <button @click="changeName('李四')">修改用户名</button>
        <button @click="resetUser">重置用户信息</button>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'


const user = reactive<{ name: string, age: number }>({
    name: '张三',
    age: 30
})

const changeName = (newName: string): void => {
    user.name = newName
}

const resetUser = (): void => {
    user.name = '张三',
    user.age = 30
}
</script>

<style scoped>

</style>