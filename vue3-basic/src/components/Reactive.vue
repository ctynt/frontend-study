<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:10:32
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:18:59
-->
<template>
    <div>
        <p>用户名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <button @click="increaseAge">增加年龄</button>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const user = reactive<{ name: string; age: number }>({
    name: '张三',
    age: 25
})

const increaseAge = ():void => {
    user.age++
}
</script>