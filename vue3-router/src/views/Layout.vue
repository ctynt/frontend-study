<template>
    <!-- 导航 -->
    <nav>
        <router-link to="/home">首页</router-link>
        <router-link to="/articles">文章列表</router-link>
        <router-link to="/user">个人中心</router-link>
    </nav>

    <!-- 路由对应的组件渲染入口 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>