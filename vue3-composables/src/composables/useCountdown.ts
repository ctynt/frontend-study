// useCountdown.js
import { ref, onUnmounted } from 'vue';

export function useCountdown(initialTime : number) {
  const timeLeft = ref(initialTime); // 倒计时剩余时间
  const newTime = ref(initialTime); // 倒计时剩余时间
  const isRunning = ref(false);      // 倒计时是否在运行
  let timerId = null;

  // 开始倒计时
  const start = () => {
    if (timeLeft.value > 0 && !isRunning.value) {
      isRunning.value = true;
      timerId = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--;
        } else {
          stop(); // 倒计时结束，停止
        }
      }, 1000);
    }
  };

  // 停止倒计时
  const stop = () => {
    clearInterval(timerId);
    isRunning.value = false;
  };

  
  // 重置倒计时
  const reset = () => {
    stop();
    timeLeft.value = newTime.value;
  };

  // 组件卸载时清除计时器
  onUnmounted(() => {
    stop();
  });

  return {
    timeLeft,
    isRunning,
    start,
    stop,
    reset,
  };
}
