<!--
 * @Author: ctynt
 * @Date: 2024-09-10 10:55:30
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-10 11:17:48
-->
<template>

<div class="container">
    <p>血量: {{ hp }}/ 100 [{{ hpPercentage }}%]</p>
    <div class="hp-bar">
      <div
        class="hp-fill"
        :style="hpColor"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const hp = ref<number>(10)

const hpPercentage = computed(() => {
    return (hp.value / 100) * 100
})

const hpColor = computed(() => {
    let color: string;
    if (hp.value > 50) {
        color = 'green'
    } else if (hp.value > 20) {
        color = 'yellow'
    } else {
        color = 'red'
    }
    return {
        width: hp.value + '%',
        backgroundColor: color
    }
})

</script>

<style scoped>
.container {
  width: 100%;
  margin: 20px auto;
  text-align: center;
}

.hp-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  position: relative;
  border-radius: 2px;
}

.hp-fill {
  height: 100%;
  transition: width 0.3s ease, background-color 0.3s ease;
  border-radius: 2px;
}
</style>