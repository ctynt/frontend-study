<!--
 * @Author: ctynt
 * @Date: 2024-09-24 08:40:11
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-24 10:24:48
-->
<template>
    <div>
        <h2>邮件发送</h2>
        <div >
            <form @submit.prevent="submitForm">
             
                    <input type="email" placeholder="请输入收件人邮箱" v-model="form.to" />
                    <input type="text" placeholder="请输入邮箱主题" v-model="form.subject" />
                    <textarea type="text" placeholder="请输入邮箱内容" v-model="form.body" class="body" rows="10" cols="30" />
                    <button type="submit">发送</button>
             

            </form>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    to: '',
    subject: '',
    body: ''
})

const emits = defineEmits<{ "submit-form": [any] }>()

const submitForm = () => {
    emits('submit-form', form)
}

</script>

<style scoped>
h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 30%;
    margin: 0 auto;

}

input,
textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 200px;
    margin: 0 auto;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}
</style>