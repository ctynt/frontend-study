<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="请输入用户名" v-model="form.username" />
            <input type="text" placeholder="请输入邮箱" v-model="form.email" />
            <input type="password" v-model="form.password" />
            <button type="submit">注册</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    username: '',
    email: '',
    password: ''
})

// 定义 emits 事件
const emits = defineEmits<{"submit-form":[any] }>()

const submitForm = () => {
    // 子组件通过 emit('submit-form', form) 触发 submit-form 事件，并将表单数据传递给父组件；
    emits('submit-form', form)
}

</script>

<style scoped></style>