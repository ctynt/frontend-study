<!--
 * @Author: ctynt
 * @Date: 2024-09-10 13:50:25
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:29:14
-->
<template>
    <div>
        <p>原价：{{ price }}</p>
        <p>折扣：{{ discount }}</p>
        <p>折后价：{{ discountedPrice }}</p>

    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const price = ref<number>(100)
const discount = ref<number>(0.8)

const discountedPrice = computed(() => {
    return price.value * discount.value
})
</script>
