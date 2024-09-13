<!--
 * @Author: ctynt
 * @Date: 2024-09-10 08:48:11
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 17:04:47
-->
<template>
  <div>
    <!-- 绑定isDisabled属性 -->
     <!-- <button v-bind="isDisabled">点击</button> -->
     <button :disabled="isDisabled">点击</button>
     <img :src="url" alt="">
     <button v-bind="buttonAttrs">点击我</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDisabled = ref<boolean>(false)
const url = ref<string>('https://yanting-bucket1.oss-cn-nanjing.aliyuncs.com/blog/me.jpg')
console.log(url.value)

import { reactive } from 'vue'
// 定义⼀个包含多个属性的对象
const buttonAttrs = reactive({
 disabled: false,
 title: '按钮已禁⽤',
 id: 'unique-button',
})

</script>