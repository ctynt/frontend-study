<template>
    <div class="login-container">
        <h2>登录</h2>
        <input v-model="phone" placeholder="请输入手机号" class="input-field" />
        <button :disabled="isSending || countdown > 0" @click="sendCode" class="send-button">
            {{ countdown > 0 ? `${countdown}s 后重新发送` : '发送验证码' }}
        </button>
        <input v-model="code" placeholder="请输入验证码" class="input-field" />
        <button @click="login" class="login-button">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("13585107185");
const code = ref<string>("");
const countdown = ref<number>(0); // 倒计时
const isSending = ref<boolean>(false); // 发送中状态

const sendCode = async () => {
    if (countdown.value === 0) {
        isSending.value = true;
        try {
            await authStore.sendCode(phone.value);
            startCountdown();
        } catch (error) {
            console.error("验证码发送失败", error);
        } finally {
            isSending.value = false;
        }
    }
};

// 开始倒计时
const startCountdown = () => {
    countdown.value = 60;
    const interval = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(interval);
        }
    }, 1000);
};

const login = async () => {
    await authStore.login(phone.value, code.value);
    router.push("/profile");
};
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.input-field {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.send-button,
.login-button {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.send-button {
    background-color: #007bff;
    color: white;
}

.send-button:disabled {
    background-color: #b0c4de;
    cursor: not-allowed;
}

.login-button {
    background-color: #28a745;
    color: white;
}

.login-button:hover {
    background-color: #218838;
}
</style>
