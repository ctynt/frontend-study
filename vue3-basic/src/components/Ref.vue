<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:08:42
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 10:09:55
-->
<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="increment">增加计数</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)

const increment = ():void => {
    count.value++
}
</script>

<style scoped>

</style>