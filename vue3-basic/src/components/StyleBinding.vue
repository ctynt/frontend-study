<template>
  <div>
    <p :style="pStyle">这是一段文字</p>
    <button @click="toggleClass">切换</button>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";

const isBold = ref<boolean>(false);
const pStyle = ref<{
    fontWeight: string
    color: string
}>({
    fontWeight: 'normal',
    color: 'black'
})

const toggleClass = () => {
    isBold.value = !isBold.value;
    pStyle.value = {
        fontWeight: isBold.value ? 'bold' : 'normal',
        color: isBold.value ? 'blue' : 'black'
    }
}
</script>

  