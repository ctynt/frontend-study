// useSmsSender.ts
import { ref, onUnmounted } from 'vue';

export default function useSmsSender(waitTime: number = 60) {
  const isSending = ref(false);
  const countdown = ref(waitTime);
  const timer = ref<NodeJS.Timeout | null>(null);

  const sendSms = async (phoneNumber: string): Promise<void> => {
    if (isSending.value) {
      console.error('短信正在发送中，请稍后');
      return;
    }

    isSending.value = true;
    countdown.value = waitTime; // 重置倒计时

    try {
      await simulateSendSms(phoneNumber); // 调用短信发送函数
      startCountdown();
    } catch (error) {
      console.error('短信发送失败', error);
      isSending.value = false; // 重置发送状态
    }
  };

  const simulateSendSms = (phoneNumber: string): Promise<void> => {
    return new Promise((resolve) => {
      console.log(`发送短信到: ${phoneNumber}`);
      setTimeout(() => {
        resolve();
      }, 2000); // 模拟 2 秒的发送延迟
    });
  };

  const startCountdown = () => {
    timer.value = setInterval(() => {
      if (countdown.value <= 0) {
        clearInterval(timer.value!);
        timer.value = null;
        isSending.value = false; // 短信发送完成，重置状态
      } else {
        countdown.value--;
      }
    }, 1000);
  };

  const reset = () => {
    clearInterval(timer.value!);
    timer.value = null;
    countdown.value = waitTime; // 重置倒计时
    isSending.value = false; // 重置发送状态
  };

  onUnmounted(() => {
    reset(); // 组件卸载时清理
  });

  return {
    isSending,
    countdown,
    sendSms,
    reset,
  };
}
