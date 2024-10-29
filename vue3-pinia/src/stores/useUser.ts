import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

// 定义用户信息接口
interface User {
    id: number,
    phone: string,
    avatar: string,
    nickname: string,
    gender: number,
    bonus: number
}

// 定义存储接口
interface UserStore {
    user: User | null;
    fetchUser: () => Promise<void>;
    clearUser: () => void;
}


export const useUserStore = defineStore("user", (): UserStore => {
    const user = ref<User | null>(null);    //用户信息

    // 从本地存储中加载用户信息
    const loadUserFromLocalStorage = (): void => {
        const userData = localStorage.getItem("user");
        if (userData) {
            user.value = JSON.parse(userData);
        }
    };

    // 从后端获取用户信息
    const fetchUser = async (): Promise<void> => {
        try {
            // 发起请求获取用户信息
            const response = await axios.get("http://localhost:8080/user/info", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            console.log(response.data.data);
            //将获取到的用户信息赋值给user
            user.value = response.data.data;
            //  保存到本地存储
            localStorage.setItem("user", JSON.stringify(user.value));
        }
        catch (error) {
            console.error("获取用户信息失败：", error);
        }
    };

    // 清除用户信息（登出时使用）
    const clearUser = (): void => {
        user.value = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    loadUserFromLocalStorage();
    return {
        user,
        fetchUser,
        clearUser,
    };
});