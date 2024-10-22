<!--
 * @Author: ctynt
 * @Date: 2024-09-14 16:05:13
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-12 18:01:11
-->
<template>
    <div class="container">
        <div v-for="item in list" :key="item.id" class="card">
            <div class="left">
                <img :src="item.banner" alt="">
            </div>
            <div class="right">
                <h3>{{ item.title }}</h3>
                <p>
                    <span class="updated">{{ item.updated }}</span>
                    <span>{{ item.viewCount }} 次浏览</span>
                </p>
            </div>
            <span v-if="item.isFollowing === 'TRUE'" class="follow followed">已关注</span>
            <span v-else class="follow unfollowed">关注</span>
        </div>

        <div style="text-align: center;">
            <button @click="prevPage" :disabled="isFirstPage" :class="{ 'disabled': isFirstPage }">
                上一页
            </button>
            <button @click="nextPage" :disabled="isLastPage" :class="{ 'disabled': isLastPage }">
                下一页
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

interface Special {
    id: string;
    title: string;
    banner: string;
    introduction: string;
    isFollowing: string;
    followersCount: number;
    viewCount: number;
    updated: string;
}

const list = ref<Special[]>([]);

const limit = ref<number>(3);
const offset = ref<number>(0);
const total = ref<number>(0);


const fetchByPage = (): void => {
    axios
        .get(`http://localhost:8080/api/v1/special/page?limit=${limit.value}&offset=${offset.value}`)
        .then((res) => {
            list.value = res.data.data.specials;
            total.value = res.data.data.total;
        })
        .catch((err) => {
            console.error(err);
        });

}

const nextPage = (): void => {
    if (offset.value + limit.value >= list.value.length) {
        offset.value += limit.value;
        fetchByPage();
    }
};

const prevPage = (): void => {
    if (offset.value > 0) {
        offset.value -= limit.value;
    }
    fetchByPage();
}

const isFirstPage = computed(() => offset.value === 0);
const isLastPage = computed(() => offset.value + limit.value >= total.value);

onMounted(() => {
    fetchByPage();
});

</script>

<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
}

.card {
    display: flex;
    height: 100px;
    margin-bottom: 15px;
    bottom: 1px solid #ccc;
    box-shadow: 10px 5px 5px #ddd;
    border-radius: 8px;
    position: relative;
}

.left {
    flex: 1;
}

.right {
    flex: 4;
    padding: 10px;
}

.left img {
    width: 100px;
    height: 100px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

p span {
    font-size: 15px;
    color: #333;
}

.updated {
    margin-right: 20px;
}

.follow {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px 10px;
    font-size: 14px;

}

.followed {
    background-color: #f6f6f6;
    color: #716c6c;
}

.unfollow {
    background-color: #eff4fe;
    color: #3670ee;
}

button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button:disabled,
button.disabled {
    background-color: #d6d6d6;
    color: #888;
    cursor: not-allowed;
}
</style>