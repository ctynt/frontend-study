// 封装了对知乎热榜数据的各种请求操作

import api from "./axiosinstance";
import type { HotItem } from "../types/zhihu";

// 获取数据
export const fetchHotList = api.get<{ data: HotItem[] }>('/hot');

// 添加数据
export const addHotItem = (item: Partial<HotItem>) => api.post('/hot', item);

// 更新数据
export const updateHotItem = (id: number, updatedItem: Partial<HotItem>) =>
    api.put(`/hot/${id}`, updatedItem);

// 删除数据
export const deleteHotItem = (id: number) => api.delete(`/hot/${id}`);