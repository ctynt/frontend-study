
<template>
    <div>
    <h2>知乎热榜</h2>
    <ul>
        <li v-for="item in hotList" :key="item.id">
            <img :src="item.image" alt="image">
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
            <p>热度{{ item.hotIndex }}</p>
            <a :href="item.url" target="_blank">查看详情</a>
            <hr>
        </li>
    </ul>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import type { HotItem } from '../types/zhihu';
import { ref,onMounted } from 'vue';

const hotList = ref<HotItem[]>([]);

const fetchList = async() => {
    const res = await axios.get('https://api.zhihu.com/hot');
    hotList.value = res.data.data;
}

onMounted(fetchList);
</script>

<style scoped></style>