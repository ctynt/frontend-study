<!--
 * @Author: ctynt
 * @Date: 2024-09-10 08:55:52
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 08:59:11
-->
<template>
  <div>
    <p :class="pClass">这是一段文字</p>
    <button @click="toggleClass">切换</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isHighLight = ref<boolean>(false)
const pClass = ref<{[key: string]: boolean}>({
    isHighLight: isHighLight.value,
    normal: !isHighLight.value
})
// 切换类名
const toggleClass = () => {
    isHighLight.value = !isHighLight.value
    pClass.value = {
        isHighLight: !isHighLight.value,
        normal: isHighLight.value
    }
}

</script>

<style>
.isHighLight {
    color: red;
}

.normal {
    color: black;
}
</style>
