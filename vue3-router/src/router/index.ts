import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";

// 定义路由数组
const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("../views/Home.vue")
            },
            {
                path: "/articles",
                name: "ArticleList",
                component: () => import("../views/ArticleList.vue")
            },
            {
                path: "/articles/:id",
                name: "ArticleDetail",
                component: () => import("../views/ArticleDetail.vue"),
                children: [
                    {
                        path: "comments",
                        name: "ArticleComments",
                        component: () => import("../views/ArticleComments.vue")
                    }
                ]
            },

            {
                path: "/user",
                component: () => import("../views/UserDashboard.vue"),
                redirect: "/user/profile",
                children: [
                    {
                        path: "profile",
                        name: "UserProfile",
                        component: () => import("../views/UserProfile.vue")
                    },
                    {
                        path: "setting",
                        name: "UserSetting",
                        component: () => import("../views/UserSetting.vue")
                    }
                ],
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    }

];


// 定义路由对象
const router = createRouter({
    history: createWebHistory(),
    routes, // routes: routes 的缩写
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {

            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// router.beforeEach((to, from, next) => {
//     if (to.path.startsWith('/user') ){
//         next('/login')
//     } else {
//         next()
//     }
// })

router.beforeEach((to, from, next) => {

    // 检查用户访问的是不是个人中心，并且是否已登录
    if (to.path.startsWith('/user') && !localStorage.getItem('token')) {
        alert("请先登录")
        // 如果未登录，重定向到登录页面
        next('/login')
    } else {
        // 允许进入目标路由
        next()
    }
})


// 导出路由对象
export default router;