<template>
    <div class="scroll-demo">
        <button @click="scrollToskills">滚动到技能展示</button>
        <div class="content">
            <div ref="skillsSection" class="skills">
                <h2>技能展示</h2>
                <p>技能详细内容...</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const skillsSection = ref<HTMLElement | null>(null);

const scrollToskills = () => {
    skillsSection.value?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.scroll-demo {
    text-align: center;
    margin-top: 20px;
}

.skills {
    margin-top: 1000px;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 8x;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #388e3c;
}
</style>