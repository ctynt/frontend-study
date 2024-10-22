<template>
    <div>
        <div>
            <router-link to="/user/profile">用户信息</router-link>
            <router-link to="/user/setting">用户设置</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
div {
    margin: 20px 0;
}
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

