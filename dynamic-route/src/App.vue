<template>
  <div style="display: flex; justify-content: space-between">
    <div style="width: 200px">
      <el-menu @select="handleSelect">
        <el-sub-menu
          v-for="route in routes"
          :key="route.path"
          :index="route.path"
        >
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <el-menu-item
            v-for="child in route.children"
            :key="child.path"
            :index="child.path"
          >
            {{ child.name }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <div style="flex: 1">
      <el-button @click="addNewRoute" type="primary">添加路由</el-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addRoute } from "./router";

// 定义一个响应式的嵌套路由列表
const routes = ref([
  {
    path: "/home",
    name: "Home",
    children: [
      {
        path: "/home/dashboard",
        name: "Dashboard",
        component: () => import("./views/DashboardView.vue"),
      },
      {
        path: "/home/settings",
        name: "Settings",
        component: () => import("./views/SettingsView.vue"),
      },
    ],
  },
]);

const router = useRouter();
const activePath = ref("/");

const handleSelect = (path) => {
  activePath.value = path;
  router.push(path).catch((err) => {
    console.error(`Navigation error: ${err.message}`);
  });
};

const addNewRoute = () => {
  // 检查是否已经添加了 'User' 路由
  if (!router.hasRoute("User")) {
    // 动态添加新路由
    addRoute({
      path: "/user",
      name: "User",
      redirect: "/user/profile",
      children: [
        {
          path: "/user/profile",
          name: "Profile",
          component: () => import("./views/ProfileView.vue"),
        },
        {
          path: "/user/settings",
          name: "UserSettings",
          component: () => import("./views/UserSettingsView.vue"),
        },
      ],
    });

    // 更新路由菜单数据
    routes.value.push({
      path: "/user",
      name: "User",
      children: [
        { path: "/user/profile", name: "Profile" },
        { path: "/user/settings", name: "UserSettings" },
      ],
    });
  } else {
    console.log("路由 'User' 已经存在，无法重复添加");
  }
};
</script>

<style>
#app {
  display: flex;
}
</style>
