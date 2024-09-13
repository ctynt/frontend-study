<template>
    <div>
        <h2>当前形态：{{ title }}</h2>
        <button @click="toggleForom">点击切换</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('齐天大圣')
const isClicked = ref<boolean>(false)

const toggleForom = () => {
    isClicked.value = !isClicked.value
    title.value = isClicked.value ?'斗战胜佛' : '齐天大圣'
    
}

</script>

<style scoped>
div {
    background-color: #fff;
    padding: 10px;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #f7e499;
}

button {
    background-color: #ffd429;
   
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;

}


</style>