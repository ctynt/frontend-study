import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 ElementPlus 的样式文件
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'

import './assets/font1/iconfont.css'
import './assets/font1/iconfont.js'

const app = createApp(App);

app.use(ElementPlus); // 安装 ElementPlus 插件

app.mount('#app');