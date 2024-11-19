import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { permissionDirective } from "./directives/permission";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

// 全局注册自定义指令 'v-permission'
app.directive("permission", permissionDirective);

app.mount("#app");
