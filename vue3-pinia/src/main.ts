import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入pinia
import { createPinia } from 'pinia'
// 实例化pinia
const pinia = createPinia();
import piniaPulginPersistedState from 'pinia-plugin-persistedstate'
pinia.use(piniaPulginPersistedState)

import router from './router'
createApp(App).use(pinia).use(router).mount('#app')
