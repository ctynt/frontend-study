<template>
    <div>
        <div class="header">
            <span class="iconfont icon-bilibili" style="font-size: 14px;"> 首页</span>
            <span>番剧</span>
            <span>直播</span>
            <span>游戏中心</span>
            <span>会员购</span>
            <span>漫画</span>
            <span>赛事</span>
            <span>畅玩SI4</span>
            <span class="iconfont icon-xiazai" style="font-size: 14px;">下载客户端</span>
            <div class="sousuo">明日方舟·1小时前更新 <span class="iconfont icon-sousuo" style="float: right;"></span></div>
            <div class="avatar"><img src="../assets/images/me.jpg" alt=""></div>

            <div class="header-icon">
                <span class="iconfont icon-wodedahuiyuan ml-10"></span>
                <p>大会员</p>
            </div>
            <div class="header-icon">
                <span class="iconfont icon-xiaoxi ml-3"></span>
                <p>消息</p>
            </div>
            <div class="header-icon">
                <span class="iconfont icon-dongtai ml-3"></span>
                <p>动态</p>
            </div>
            <div class="header-icon">
                <span class="iconfont icon-shoucang ml-3"></span>
                <p>收藏</p>
            </div>
            <div class="header-icon">
                <span class="iconfont icon-lishi ml-3"></span>
                <p>历史</p>
            </div>
            <div class="header-icon">
                <span class="iconfont icon-chuangzuozhongxin ml-10"></span>
                <p>创作中心</p>
            </div>

            <el-button style="background-color: #fb7299;border: none;">
                <span class="iconfont icon-daochu " style="font-size: 12px;color: white;font-weight: 600;">
                    投稿</span></el-button>
        </div>

        <div class="navbar">

            <div class="navbar-item">
                <img src="../assets/images/mrfz.jpg" class="navbar-logo">
                <p>动态</p>
            </div>

            <div class="navbar-item">
                <img src="../assets/images/mrfz.jpg" class="navbar-logo">
                <p>热门</p>
            </div>

            <div class="tag">
                <div>
                    <button v-for="item in button1" :key="item.id" class="tag-item">{{ item.name }}</button>
                </div>
                <div style="margin-top: 10px;">
                    <button v-for="item in button2" :key="item.id" class="tag-item">{{ item.name }}</button>
                </div>
            </div>

            <div class="navbar-icon">
                <div style="margin-top: 10px;">
                    <span class="iconfont icon-zhuanlan">&nbsp专栏</span>
                    <span class="iconfont icon-zhuanlan">&nbsp活动</span>
                    <span class="iconfont icon-zhuanlan">&nbsp社区中心</span>
                </div>
                <div style="margin-top: 30px;">
                    <span class="iconfont icon-zhuanlan">&nbsp直播</span>
                    <span class="iconfont icon-zhuanlan">&nbsp课堂</span>
                    <span class="iconfont icon-zhuanlan">&nbsp新歌热榜</span>
                </div>


            </div>

        </div>

        <div class="content">
            <div class="content-item">
                <el-carousel height="350px">
                    <el-carousel-item v-for="item in 2" :key="item">
                        <h3 class="small justify-center" text="2xl"></h3>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="content-video">
                <div class="video">
                    <div class="video-item">
                        <img src="../assets/images/video1.jpg" alt="">
                        <p class="title">用EVA的方式告别日本的夏天</p>
                        <p>&nbsp瓜皮M君 ·9-14</p>
                    </div>
                    <div class="video-item">
                        <img src="../assets/images/video2.jpg" alt="">
                        <p class="title">【生肉朗读】来读《银河铁道之夜》</p>
                        <p>&nbsplunlun的人类观察所 ·9-2</p>
                    </div>
                 
                </div>
                <div class="video">
                    <div class="video-item">
                        <img src="../assets/images/video3.jpg" alt="">
                        <p class="title">【熟】关于小柳狼粉色少女心的房子</p>
                        <p>&nbsp我只要甜甜的部分就好 ·9-22</p>
                    </div>
                    <div class="video-item">
                        <img src="../assets/images/video4.jpg" alt="">
                        <p class="title">【失忆投捕/忘却battery】春岚</p>
                        <p>&nbsp世界产 ·8-30</p>
                    </div>
                  
                </div>
                <div class="video">
                    <div class="video-item">
                        <img src="../assets/images/video5.jpg" alt="">
                        <p class="title">气氛组的食力！结局暖心</p>
                        <p>&nbsp丐伦菌 ·23小时前</p>
                    </div>
                    <div class="video-item">
                        <img src="../assets/images/video6.jpg" alt="">
                        <p class="title">《明日方舟》EP - Mystic Light Quest</p>
                        <p>&nbsp明日方舟 ·8-1</p>
                    </div>
                  
                </div>

            </div>



        </div>
    </div>


</template>

<script setup lang="ts">

import { ref } from 'vue'

const button1 = ref([
    {
        id: 1,
        name: '番剧'
    },
    {
        id: 2,
        name: '国创'
    },
    {
        id: 3,
        name: '综艺'
    },
    {
        id: 4,
        name: '动画'
    },
    {
        id: 5,
        name: '鬼畜'
    },
    {
        id: 6,
        name: '舞蹈'
    },
    {
        id: 7,
        name: '娱乐'
    },
    {
        id: 8,
        name: '科技'
    },
    {
        id: 9,
        name: '美食'
    },
    {
        id: 10,
        name: '汽车'
    },
    {
        id: 11,
        name: '运动'
    }

])

const button2 = ref([
    {
        id: 1,
        name: '电影'
    },
    {
        id: 2,
        name: '电视剧'
    },
    {
        id: 3,
        name: '纪录片'
    },
    {
        id: 4,
        name: '游戏'
    },

    {
        id: 5,
        name: '音乐'
    },
    {
        id: 6,
        name: '影视'

    },
    {
        id: 7,
        name: '知识'
    },
    {
        id: 8,
        name: '资讯'
    },
    {
        id: 9,
        name: '生活'
    },
    {
        id: 10,
        name: '时尚'
    },

    {
        id: 11,
        name: '更多'
    }


])

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;

    height: 120px;
    color: #fff;
    font-size: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 10px;

    background-image: url(../assets/images/banner2.png);
    background-color: #142a66;
    background-size: cover;
}

.header>span {
    padding-top: 12px;
}

.sousuo {
    background-color: #f2f3f4;
    width: 380px;
    border-radius: 5px;
    padding: 8px;
    height: 20px;
    color: #5f646e;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 2px;
    background-color: #fff;
}

.avatar>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.header-icon {
    line-height: 4px;
    margin-top: 10px;
    align-items: center;
}

.ml-3 {
    margin-left: 3px;
}

.ml-10 {
    margin-left: 10px;
}

.navbar {
    display: flex;
    margin-top: 160px;
}

.navbar {
    line-height: 5px;
    margin-left: 50px;
}

.navbar-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.navbar-item {
    margin-right: 20px;
    font-size: 14px;

}

.navbar-item>p {
    margin-left: 5px;
}

.tag>div>button {
    border: 1px solid #f1f2f3;
    background-color: #f6f7f8;
    width: 75px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #6f737a;
    border-radius: 5px;
    margin-right: 7px;
}

.tag {
    padding-right: 20px;
    border-right: 1px solid #e3e5e7;
}

.tag>div>button:hover {
    background-color: #f4f4f4;
}

.navbar-icon {
    padding-left: 20px;
}

.navbar-icon>div>span {
    color: #61666d;
    font-size: 12px;
    margin-right: 10px;
}


.demonstration {
    color: var(--el-text-color-secondary);
}


.el-carousel__item:nth-child(2n) {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/swiper1.png);
    background-size: cover;
    border-radius: 10px;
}

.el-carousel__item:nth-child(2n + 1) {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/swiper2.png);
    background-size: cover;
    border-radius: 10px;
}

.content-item {
    width: 500px;


}

.content {
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
}

.video-item {
    width: 240px;
    height: 200px;
    margin: 0 10px 10px 10px;
    line-height: 5px;
}



.video-item>img {
    width: 240px;
    height: 140px;
    border-radius: 10px;

}

.video-item>p {
    font-size: 12px;
    color: #9499a0;
}

.video-item>.title {
    height: 20px;
    color: #000;
    font-size: 14px;
}

.content-video {
    display: flex;
}
</style>