<!--
 * @Author: ctynt
 * @Date: 2024-09-24 08:41:56
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-24 10:28:52
-->
<template>
    <div>
        <EmailForm @submit-form="handleSubmit" />
        <div class="inside" v-if="submitData">邮件发送数据：{{ submitData }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailForm from './EmailForm.vue';
import axios from 'axios';

// 定义表单提交的数据对象
const submitData = ref(null);

// 处理子组件传递的数据
const handleSubmit = (data: any) => {
    submitData.value = data;
    axios.post("http://localhost:8080/mail", submitData.value).then((res) => {
        console.log(res);
    })
}
</script>

<style scoped>
.inside {
    margin-top: 20px;
    padding: 10px;
    text-align: center;
}
</style>