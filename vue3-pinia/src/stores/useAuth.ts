/*
 * @Author: ctynt
 * @Date: 2024-10-22 13:43:07
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-22 14:25:06
 */
import { defineStore } from 'pinia'
import axios from 'axios';

interface AuthStore {
    sendCode: (phone: string) => Promise<void>
    login: (phone: string, code: string) => Promise<void>
}

export const useAuthStore = defineStore("auth", (): AuthStore => {
    const sendCode = async (phone: string): Promise<void> => {
        try {
            await axios.post(`http://localhost:8080/sms/send?phone=${phone}`);
        } catch (error) {
            console.error("发送验证码失败",error);
        }
    }

    const login = async (phone: string, code: string): Promise<void> => {
        try {
            const res = await axios.post(`http://localhost:8080/user/login?phone=${phone}&code=${code}`);
            console.log("登陆成功");
            localStorage.setItem('token', res.data.data.accessToken);
        } catch (error) {
            console.error("登陆失败", error);
        }
    }

    return {
        sendCode,
        login
    }
}
)