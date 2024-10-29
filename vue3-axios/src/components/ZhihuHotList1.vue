<template>
    <div>
        <h2>知乎热榜</h2>
        <button @click="addNewHotItem">添加热榜数据</button>
        <ul>
            <li v-for="item in pagedHotList" :key="item.id">
                <img :src="item.image" alt="image">
                <h3>{{ item.title }}</h3>
                <h3>简介：{{ item.excerpt }}</h3>
                <h3>热度：{{ item.hotIndex }}</h3>
                <!-- <a :href="item.url" target="_blank">查看详情</a> -->
                <button @click="updateOldHotItem(item.id)">更新</button>
                <button @click="removeHotItem(item.id)">删除</button>
                <hr />
            </li>
        </ul>
        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
</template>

<script setup lang="ts">
import {
    fetchHotList,
    addHotItem,
    updateHotItem,
    deleteHotItem,
} from '../api/zhihuApi';
import { onMounted, ref, computed } from "vue";
import type { HotItem } from "../types/zhihu";

const hotList = ref<HotItem[]>([]);
const currentPage = ref(1);
const pageSize = ref(2);


// 添加热榜数据
const addNewHotItem = async () => {
    const newItem = {
        title: "新的热榜数据",
        excerpt: "这是一个新的热榜数据",
    }
    const res = await addHotItem(newItem);
    console.log(res.data.message);
    hotList.value.unshift(res.data.data);
}

// 更新数据
const updateOldHotItem = async (id: number) => {
    const updatedItem = {
        title: "更新后的热榜标题",
        excerpt: "更新后的热榜简介",
    }
    const res = await updateHotItem(id, updatedItem);
    console.log(res.data.message);
    // 更新本地数据
    // 从数组中找到id为指定数据的元素索引
    const itemIndex = hotList.value.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
        hotList.value[itemIndex].title = updatedItem.title;
        hotList.value[itemIndex].excerpt = updatedItem.excerpt;
    }
};

// 删除数据
const removeHotItem = async (id: number) => {
    const res = await deleteHotItem(id);
    console.log(res.data.message);
    // 从本地数组移除数据
    hotList.value = hotList.value.filter((item) => item.id !== id);
};


const fetchList = async () => {
    const res = await fetchHotList
    hotList.value = res.data.data;
};

// 计算属性：计算总页数
const totalPages = computed(() =>
    Math.ceil(hotList.value.length / pageSize.value)
);

// 根据当前页码和每一页数量，计算分页数据
const pagedHotList = computed(() =>
    hotList.value.slice(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value
    )
);

// 下一页点击事件
const nextPage = () => {
    // 不是最后一页才能点击下一页
    if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
    }
};

// 上一页点击事件
const prevPage = () => {
    // 不是第一页才能点击上一页
    if (currentPage.value > 1) {
        currentPage.value -= 1;
    }
};


onMounted(fetchList);

</script>

<style scoped></style>