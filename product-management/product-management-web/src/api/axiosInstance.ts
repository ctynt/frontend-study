/*
 * @Author: ctynt
 * @Date: 2024-10-29 11:28:25
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-29 12:34:55
 */
import axios from 'axios';
const apiInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
});
apiInstance.interceptors.response.use(
    response => response,
    error => {
        console.error(error.response ? error.response.data : '请求失败');
        return Promise.reject(error);
    }
);
export default apiInstance;
