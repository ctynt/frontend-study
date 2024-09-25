<!--
 * @Author: ctynt
 * @Date: 2024-09-24 10:33:23
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-24 10:36:54
-->
<template>
    <el-card class="login-card">
        <h2>登录表单</h2>
        <el-form label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const submitForm = () => {
    console.log("提交的数据：", {
        username: username.value,
        password: password.value
    })

}
</script>

<style scoped>
.login-card {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}
</style>