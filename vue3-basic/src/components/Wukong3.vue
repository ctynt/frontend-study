<template>
    <div>
        <h1>技能列表</h1>
        <ul>
            <li v-for="skill in skills" :key="skill.name">
                <span>{{ skill.name }} - </span>
                <span v-if="skill.status" style="color: green">已解锁</span>
                <span v-else style="color: red">未解锁</span>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
    name: string
    status: boolean
}

const skills = ref<Skill[]>([
    { name: '七十二变', status: true },
    { name: '火眼金睛', status: false },
    { name: '筋斗云', status: true }

])

</script>

<style scoped>

</style>