<template>
  <div>
    <h1>Vue 3 自定义权限指令示例</h1>
    <!-- 只有当用户拥有 'view' 权限时才会显示 -->
    <el-button v-permission="'view'" type="primary">查看内容</el-button>
    <!-- 只有当用户拥有 'edit' 权限时才会显示 -->
    <el-button v-permission="'edit'" type="success">编辑内容</el-button>
    <!-- 用户没有 'delete' 权限，这个按钮不会显示 -->
    <el-button v-permission="'delete'" type="warning">删除内容</el-button>
  </div>
</template>
