<!--
 * @Author: ctynt
 * @Date: 2024-09-24 15:01:02
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-25 13:07:00
-->
<template>
    <div class="total">
        <div class="header">
            <img src="../assets/images/logo.png" class="logo" />
            <span class="iconfont icon-sousuo search">
                搜索微博
            </span>

            <div class="section">
                <span class="iconfont icon-zhuye"></span>
                <span class="iconfont icon-tubiaozhuanqu-05"></span>
                <span class="iconfont icon-shipin"></span>
                <span class="iconfont icon-sixin"></span>
            </div>
            <img src="../assets/images/me.jpg" class="avatar">

        </div>

        <div class="content">

            <div class="left">
                <p class="menu">首页</p>
                <el-menu>
                    <el-menu-item index="1">
                        <el-icon><icon-menu /></el-icon>
                        <span>全部关注</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>最新微博</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-icon><icon-menu /></el-icon>
                        <span>特别关注</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon><icon-menu /></el-icon>
                        <span>好友圈</span>
                    </el-menu-item>
                </el-menu>
                <p class="menu">自定义分组</p>
                <el-menu>
                    <el-menu-item index="1">
                        <el-icon><icon-menu /></el-icon>
                        <span>悄悄关注</span>
                    </el-menu-item>
                </el-menu>

            </div>
            <div class="center">
                <img src="../assets/images/banner.png" class="banner">
                <div class="info">
                    <img src="../assets/images/mrfz.jpg" class="personal">
                    <div class="name">
                        <p style="font-weight: 600;">明日方舟Arknights</p>
                        <p style="font-size: 14px;color: #979aa2;">275.2万粉丝 46关注 1.23亿转赞评</p>
                    </div>
                    <div class="button">
                        <el-button round>特别关注</el-button>
                        <el-button round>客服</el-button>
                        <el-button round>···</el-button>
                    </div>
                </div>


                <div class="tag">
                    <span>热门游戏博主 数据飙升</span>
                    <span>昨日发博2，阅读数100万+，互动数2.2万</span>
                </div>

                <div class="intro">
                    <p>《明日方舟》官方微博</p>
                    <p>IP属地：上海</p>
                </div>

                <div>
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                        <el-tab-pane label="精选" name="first">
                            <el-carousel height="260px">
                                <el-carousel-item v-for="item in 2" :key="item">
                                    <h3 class="small justify-center" text="2xl"></h3>
                                </el-carousel-item>
                            </el-carousel>

                            <div class="item">
                                <div class="first-header">
                                    <img src="../assets/images/mrfz.jpg" alt="">
                                    <div class="header-person">
                                        <p style="font-weight: 600;">明日方舟Arknights</p>
                                        <p style="color:#979aa2">8-28 11:00 来自 微博网页端</p>
                                    </div>


                                </div>
                                <div class="first-content">
                                    <p style="color:#ed7f50">明日方舟超话#明日方舟##明日方舟迷宫饭#</p>
                                    <p>【明日方舟×迷宫饭】SideStory「泰拉饭」限时活动即将开启</p>
                                    <br>
                                    <p>迷宫里......竟然存在这样的地方？</p>
                                    <p>源石？泰拉？罗德岛？这些都是什么东西啦！</p>
                                    <p>比搞不清楚状况还要可怕的......是营养不足！</p>
                                    <p>“不是吃，就是被吃”的道理在这里也行得通吧？</p>
                                    <p>收拾好刀剑和法杖，也别忘了锅、铲还有调料！</p>
                                    <p>准备好了吗，我们可要开动了！</p>
                                    <img src="../assets/images/video.png" style="width: 500px;border-radius: 10px;">

                                </div>
                                <div class="content-icon">
                                    <span class="iconfont icon-zhuanfa">1.4万</span>
                                    <span class="iconfont icon-pinglun">6644</span>
                                    <span class="iconfont icon-dianzan">8.9万</span>
                                </div>

                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="微博" name="second">微博</el-tab-pane>
                        <el-tab-pane label="视频" name="third">视频</el-tab-pane>
                        <el-tab-pane label="超话" name="fourth">超话</el-tab-pane>
                        <el-tab-pane label="相册" name="fifth">相册</el-tab-pane>
                        <el-tab-pane label="文章" name="sixth">文章</el-tab-pane>
                    </el-tabs>
                </div>

            </div>
            <div class="right">
                <p>关注推荐</p>
                <div class="follow">
                    <img src="../assets/images/1.1.jpg" class="right-avatar">
                    <div>
                        <p>命运-冠位指定</p>
                        <p style="font-size: 12px;color: #979aa2;">《Fate/Grand...</p>

                    </div>

                    <el-button round style="margin-top: 10px;position: absolute;right: 180px">
                        + 关注
                    </el-button>

                </div>
                <div class="follow">
                    <img src="../assets/images/1.2.jpg" class="right-avatar">
                    <div>
                        <p>艾尔之光</p>
                        <p style="font-size: 12px;color: #979aa2;">《艾尔之光》官方</p>

                    </div>

                    <el-button round style="margin-top: 10px;position: absolute;right: 180px">
                        + 关注
                    </el-button>

                </div>
                <div class="follow">
                    <img src="../assets/images/1.3.jpg" class="right-avatar">
                    <div>
                        <p>崩坏：星穹铁道</p>
                        <p style="font-size: 12px;color: #979aa2;">《崩坏：星穹...</p>

                    </div>

                    <el-button round style="margin-top: 10px;position: absolute;right: 180px">
                        + 关注
                    </el-button>

                </div>
                <div class="follow">
                    <img src="../assets/images/1.4.jpg" class="right-avatar">
                    <div>
                        <p>无畏契约</p>
                        <p style="font-size: 12px;color: #979aa2;">《无畏契约》官方</p>

                    </div>

                    <el-button round style="margin-top: 10px;position: absolute;right: 180px">
                        + 关注
                    </el-button>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #f1f2f5;
}

.logo {
    width: 100px;
    height: 35px;
}

.header {
    display: flex;
    position: fixed;
    flex-direction: row;
    width: 100%;
    height: 57px;
    padding: 10px 60px 10px 60px;
    background-color: #fff;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
    z-index: 999;
}

.search {
    width: 170px;
    padding: 5px;
    background-color: #f0f1f4;
    border-radius: 25px;
    font-size: 13px;
    color: #979aa2;
}


.selction {
    display: flex;
    flex-direction: row;
}

.section span {
    padding: 10px 40px 10px 40px;
    height: 50px;
    font-size: 20px;
}

.avatar {
    padding: 10px 40px 10px 40px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.content {
    display: flex;
    flex-direction: row;

    margin: 0px 160px 10px 160px;
    height: 100px;

}

.left {
    width: 160px;
    height: 400px;
    margin: 5px;
    margin-top: 70px;
    background-color: #fff;
    
}

.right {
    width: 250px;
    height: 350px;
    margin: 5px;
    padding: 10px;
    margin-top: 70px;
    background-color: #fff;
}

.center {
    flex: 1;
    height: 1500px;
    margin: 5px;
    margin-top: 70px;
    background-color: #fff;
}

.menu {
    font-size: 16px;
    padding-left: 10px;
}

.banner {
    width: 100%;
    height: 400px;
}


.info {
    position: relative;
    top: -50px;
    left: 10px;
}

.personal {
    width: 100px;
    height: 100px;
    background-color: #fff;
    padding: 2px;
    border-radius: 50%;
}

.name {
    display: inline-block;
    position: absolute;
    line-height: 8px;
    bottom: 0;
    margin-left: 10px;

}

.button {
    display: inline-block;
    position: absolute;
    line-height: 8px;
    bottom: 15px;
    right: 20px;
}

.demo-tabs {
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    top: -30px;
}

.tag {
    font-size: 12px;
    color: #ff6200;
    margin-left: 15px;
    margin-bottom: 10px;
}

.tag>span {
    margin-right: 5px;
    padding: 7px;
    background-color: #fff3ed;
    border-radius: 15px;
}

.intro {
    font-size: 12px;
    color: #979aa2;
    margin-left: 15px;
    margin-bottom: 10px;
    position: relative;
    top: -30px;
}

.tag {
    position: relative;
    top: -40px;

}

.demonstration {
    color: var(--el-text-color-secondary);
}


.el-carousel__item:nth-child(2n) {
    background-image: url(../assets/images/1.jpg);
    background-size: cover;
}

.el-carousel__item:nth-child(2n + 1) {
    background-image: url(../assets/images/2.jpg);
    background-size: cover;
}

.first-header {
    display: flex;
}

.first-header>img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 10px;
}

.first-header>div {
    margin-left: 10px;
    margin-top: 8px;
    font-size: 12px;
    line-height: 10px;

}

.first-content {
    font-size: 14px;
    line-height: 7px;
    margin-left: 70px;
}

.content-icon {
    color: #979aa2;
    display: flex;
    margin-top: 10px;
    margin-left: 70px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10px;

}

.right-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;

}

.follow>div {
    line-height: 7px;
    margin-top: 2px;
    margin-left: 7px;
    font-size: 13px;
}

.follow {
    display: flex;
    margin-bottom: 20px;
}
</style>