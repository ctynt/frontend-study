<!--
 * @Author: ctynt
 * @Date: 2024-10-15 08:29:35
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-15 17:57:07
-->
<template>
    <div>
        <h2>{{ article.title }}</h2>

        <p>{{ article.content }}</p>

        <router-link :to="`/articles/${article.id}/comments`">
            查看评论
        </router-link>

        <router-view> </router-view>

    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
// 接受到路由中的 id 参数
const articleId = route.params.id;

const articles = [
    {
        id: 1,
        title: '如何学习 Vue3',
        content: '如何学习 Vue3 如何学习 Vue3 如何学习 Vue3 如何学习 Vue3'
    },
    {
        id: 2,
        title: '如何学习 Router',
        content: '如何学习 Router 如何学习 Router 如何学习 Router 如何学习 Router '
    }
]

// 查找 id 为 articleId 的文章
const article = articles.find(a => a.id === Number(articleId))

</script>