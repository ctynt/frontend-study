<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="form">
        <h2 class="form-title">表单校验</h2>
  
        <!-- 用户名 -->
        <div class="form-group">
          <label for="username">用户名:</label>
          <input
            id="username"
            v-model="fields.username.value"
            @input="updateFieldValue('username', fields.username.value)"
            type="text"
            class="form-input"
            placeholder="请输入用户名"
          />
          <p v-if="fields.username.touched && fields.username.error" class="error-message">{{ fields.username.error }}</p>
        </div>
  
        <!-- 邮箱 -->
        <div class="form-group">
          <label for="email">邮箱:</label>
          <input
            id="email"
            v-model="fields.email.value"
            @input="updateFieldValue('email', fields.email.value)"
            type="text"
            class="form-input"
            placeholder="请输入邮箱"
          />
          <p v-if="fields.email.touched && fields.email.error" class="error-message">{{ fields.email.error }}</p>
        </div>
  
        <!-- 手机号 -->
        <div class="form-group">
          <label for="phone">手机号:</label>
          <input
            id="phone"
            v-model="fields.phone.value"
            @input="updateFieldValue('phone', fields.phone.value)"
            type="text"
            class="form-input"
            placeholder="请输入手机号"
          />
          <p v-if="fields.phone.touched && fields.phone.error" class="error-message">{{ fields.phone.error }}</p>
        </div>
  
        <!-- 密码 -->
        <div class="form-group">
          <label for="password">密码:</label>
          <input
            id="password"
            v-model="fields.password.value"
            @input="updateFieldValue('password', fields.password.value)"
            type="password"
            class="form-input"
            placeholder="请输入密码"
          />
          <p v-if="fields.password.touched && fields.password.error" class="error-message">{{ fields.password.error }}</p>
        </div>
  
        <button type="submit" class="submit-button">提交</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFormValidation, validationRules } from '../composables/useFormValidation';
  
  // 使用 useFormValidation 组合式函数
  const { fields, addField, addValidationRule, updateFieldValue, validateForm } = useFormValidation();
  
  // 注册字段并添加验证规则
  addField('username');
  addField('email');
  addField('phone');
  addField('password');
  
  addValidationRule('username', validationRules.username);
  addValidationRule('email', validationRules.email);
  addValidationRule('phone', validationRules.phone);
  addValidationRule('password', validationRules.password);
  
  // 提交处理
  const handleSubmit = () => {
    if (validateForm()) {
      alert('表单验证通过');
      // 处理提交逻辑
    } else {
      alert('表单验证失败');
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px; /* 最大宽度 */
    margin: 50px auto; /* 垂直居中，水平居中 */
    padding: 20px; /* 内边距 */
    border-radius: 8px; /* 圆角 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    background-color: #fff; /* 背景颜色 */
  }
  
  .form {
    display: flex; /* 使用 flexbox 进行布局 */
    flex-direction: column; /* 垂直排列 */
  }
  
  .form-title {
    text-align: center; /* 标题居中 */
    font-size: 24px; /* 字体大小 */
    margin-bottom: 20px; /* 下边距 */
  }
  
  .form-group {
    margin-bottom: 15px; /* 每个字段组之间的下边距 */
  }
  
  label {
    display: block; /* 标签块显示 */
    margin-bottom: 5px; /* 标签下边距 */
    font-weight: bold; /* 标签加粗 */
  }
  
  .form-input {
    width: 100%; /* 输入框宽度 */
    padding: 10px; /* 内边距 */
    border: 1px solid #ccc; /* 边框颜色 */
    border-radius: 4px; /* 输入框圆角 */
    font-size: 16px; /* 字体大小 */
    transition: border-color 0.3s; /* 边框颜色过渡效果 */
  }
  
  .form-input:focus {
    border-color: #007bff; /* 聚焦时边框颜色 */
    outline: none; /* 取消默认轮廓 */
  }
  
  .error-message {
    color: red; /* 错误信息颜色 */
    font-size: 14px; /* 字体大小 */
    margin-top: 5px; /* 上边距 */
  }
  
  .submit-button {
    padding: 10px; /* 内边距 */
    background-color: #007bff; /* 按钮背景颜色 */
    color: white; /* 按钮文本颜色 */
    border: none; /* 无边框 */
    border-radius: 4px; /* 按钮圆角 */
    font-size: 16px; /* 字体大小 */
    cursor: pointer; /* 鼠标悬停时指针变为手型 */
    transition: background-color 0.3s; /* 背景颜色过渡效果 */
  }
  
  .submit-button:hover {
    background-color: #0056b3; /* 悬停时背景颜色 */
  }
  </style>
  