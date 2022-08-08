import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 路由是指根据url的不同展示不同的页面
createApp(App).use(router).mount('#app')
