import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import { registerMicroApps, start } from 'qiankun';

const apps = [
  {
    name: 'Lp-VueApp2',
    // 默认会加载这个html 解析里面的js 动态地执行 (子应用必须支持跨域)，用fetch读取这个js文件
    entry: '//localhost: 10000',
    // 挂载子应用到哪个元素上面
    container: '#vue1', // 容器名
    // 激活规则,当访问 /vue 的时候，把这个应用挂载到 #vue1 上面
    activeRule: '/vueLp1' // 激活的路径
  },
  {
    name: 'Lp-VueApp2',
    entry: '//localhost: 20000',
    container: '#vue2',
    activeRule: '/vueLp2'
  }
]
// 注册
registerMicroApps(apps); // 注册应用
start({
  prefetch: false //取消预加载
}); // 开启


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

