<!--
 * @Author: ctynt
 * @Date: 2024-09-10 12:30:33
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 12:30:39
-->
<template>
    <div>
        <div>
            基础攻击力：
            <input v-model="baseAttack" type="number" />
        </div>
        <div>
            装备加成：
            <input v-model="gearBonus" type="number">
        </div>
        <p>总攻击力：{{ totalAttack }}</p>

    </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';

const baseAttack = ref<number>(50)
const gearBonus = ref<number>(20)

const totalAttack = computed(() => baseAttack.value + gearBonus.value)

</script>

<style scoped>

</style>