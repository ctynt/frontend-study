<template>
    <nav>
        <router-link to="/counter">计数器</router-link>
        <router-link to="/todo">待办清单</router-link>
        <router-link to="/finance">记账应用</router-link>
        <router-link to="/profile">个人中心</router-link>
    </nav>

    <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 定义路由导航样式 */
a {
    margin: 10px;
    text-decoration: none;
    background-color: #3abee0;
    color: #fff;
    padding: 5px 10px;
}

/* 路由激活样式 */
.router-link-active {
    background-color: #3643ba;
    font-weight: bold;
}
</style>