<!--
 * @Author: ctynt
 * @Date: 2024-10-15 10:00:18
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-15 11:06:07
-->
<template>
    <ul>
        <li v-for="comment in article.comments" :key="comment.id">
            {{ comment.comment }}
        </li>
    </ul>
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
        content: '如何学习 Vue3 如何学习 Vue3 如何学习 Vue3 如何学习 Vue3',
        comments: [
            {
                id: 1,
                comment: 'Vue3 语法简洁'
            },
            {
                id: 2,
                comment: 'Vue3 功能强大'
            },
            {
                id: 3,
                comment: 'Vue3 生态很好'
            },
            {
                id: 4,
                comment: 'Vue3 组合函数很好用'
            }

        ]
    },
    {
        id: 2,
        title: '如何学习 Router',
        content: '如何学习 Router 如何学习 Router 如何学习 Router 如何学习 Router ',
        comments: [
            {
                id: 1,
                comment: 'Vue Router 基础与静态路由'
            },
            {
                id: 2,
                comment: '动态路由与嵌套路由'
            },
            {
                id: 3,
                comment: '路由守卫与编程式导航'
            },
            {
                id: 4,
                comment: '路由懒加载'
            }
        ]
    }
]

// 查找 id 为 articleId 的文章
const article = articles.find(a => a.id === Number(articleId))

</script>

<style scoped></style>