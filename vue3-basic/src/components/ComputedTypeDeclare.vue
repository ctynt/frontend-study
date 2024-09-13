<!--
 * @Author: ctynt
 * @Date: 2024-09-10 13:53:01
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:29:01
-->
<template>
    <div>
        <p>年薪：{{ yearlySalary }}</p>

    </div>
</template>

<script setup lang="ts">
import { computed,ref } from 'vue'

const monthlySalary = ref<number>(5000)

const yearlySalary = computed<number>(() => {
    return monthlySalary.value * 12
    
})
</script>