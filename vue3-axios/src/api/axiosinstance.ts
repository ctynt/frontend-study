import axios from "axios";

// 创建 axios 的实例
const api = axios.create({
    baseURL: "https://api.zhihu.com",
    timeout: 8000, // 超时时间8s
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

// 请求拦截器
api.interceptors.request.use(
    (config) => {
        // 获取 token，添加到 请求头
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 请求错误的处理
        return Promise.reject(error);
    }
)

// 响应拦截器
api.interceptors.response.use(
    (response) => {
        // 解析响应数据
        return response.data;
    },
    (error) => {
        // 响应错误的处理
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    console.error("未认证，请登录");
                    // 跳到登录页
                    break;
                case 403:
                    console.error("权限不足，访问被禁止")
                    break;
                case 404:
                    console.error("请求的资源不存在")
                    break;
                case 500:
                    console.error("服务器内部错误")
                    break;
                default:
                    console.error(
                        "请求错误",
                        error.response.data.message || "未知错误"
                    )
            }
        } else if (error.request) {
            console.error("网络连接失败，请检查网络")
        } else if (error.message) {
            console.error("请求出错：", error.message)
        } return Promise.reject(error);

    }
)

export default api;