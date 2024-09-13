<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:38:39
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:24:15
-->
<template>
    <div>
        <p v-if="userAge < 18">未成年用户</p>
        <p v-else-if="userAge >= 18 && userAge < 60">成年用户</p>
        <p v-else>老年用户</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userAge = ref<number>(16)

const increaseAge = (): void => {
    userAge.value++
}


</script>