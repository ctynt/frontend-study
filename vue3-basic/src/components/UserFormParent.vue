<template>
    <div>
        <UserForm @submit-form="handleSubmit" />
        <p v-if="submitData">子组件提交的表单数据：{{ submitData }}</p>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserForm from './UserForm.vue';

// 定义表单提交的数据对象
const submitData = ref(null);

// 处理子组件传递的数据
const handleSubmit = (data:any) => {
    submitData.value = data;
}
</script>

<style scoped></style>