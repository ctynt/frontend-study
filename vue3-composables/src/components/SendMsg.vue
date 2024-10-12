<template>
  <div>
    <input v-model="phoneNumber" placeholder="请输入手机号码" />
    <button @click="sendSms(phoneNumber)" :disabled="isSending">{{ isSending ? `请等待 ${countdown} 秒` : '发送短信' }}</button>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import useSmsSender from '../composables/useSendMsg';
const phoneNumber = ref('');
const { isSending, countdown, sendSms } = useSmsSender(10); // 设置等待时间为 60 秒

</script>

<style scoped>

input {
  margin-bottom: 10px;
  margin-left: 20px;
  width: 200px;
}

button {
  cursor: pointer;
  margin-left: 10px;
}
</style>