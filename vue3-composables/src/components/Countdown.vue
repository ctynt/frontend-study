<template>
  <div class="countdown-timer">
    <h2>倒计时</h2>
    <div id="countdown">{{ timeLeft }} 秒</div>
    <div class="button-group">
      <button @click="start" :disabled="isRunning">开始倒计时</button>
      <button @click="stop" :disabled="!isRunning">停止倒计时</button>
      <button @click="reset">重置倒计时</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useCountdown } from '../composables/useCountdown'; // 引入倒计时逻辑

// 使用 useCountdown composable，并设置初始时间为 10 秒
const { timeLeft, isRunning, start,stop, reset} = useCountdown(10);

</script>

<style scoped>
.countdown-timer {
  
  margin: 20px;
}

#countdown {
  font-size: 2rem;
  margin: 20px 0;
}

.button-group {
  margin-top: 20px;
}

button {
  margin-right: 10px;
}
</style>
<!-- 
<template>
  <div class="countdown-timer">
    <h2>倒计时</h2>
    <div id="countdown">{{ timeLeft }} 秒</div>
    <div class="button-group">
      <button @click="start" :disabled="isRunning" class="btn">开始倒计时</button>
      <button @click="stop" :disabled="!isRunning" class="btn">停止倒计时</button>
      <button @click="reset" class="btn">重置倒计时</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown'; // 引入倒计时逻辑

const { timeLeft, isRunning, start, stop, reset } = useCountdown(10);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.countdown-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 400px;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

h2 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
}

#countdown {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: countdown-change 0.5s ease-in-out;
}

.button-group {
  display: flex;
  gap: 15px;
}

.btn {
  background-color: #fff;
  color: #6e8efb;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #6e8efb;
  color: #fff;
}

.btn:disabled {
  background-color: #ccc;
  color: #777;
  cursor: not-allowed;
}

@keyframes countdown-change {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style> -->
