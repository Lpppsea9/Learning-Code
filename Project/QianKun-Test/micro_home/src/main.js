import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null //将vue实例赋值给 instance，方便销毁

/* 当加载应用的时候，肯定要创建vue的实例 */
function render() {
  instance = new Vue({
    router,
    render: h => h(App)
    // 这里是挂载到自己的html中 基座会拿到这个挂载后的html 将其插入进去,挂到#app之后呢，他会自动的把这个页面插到父应用的apps数组中的container中
  }).$mount('#app'); 
}

/* 
  如果不在qiankun这个框架里面去运行的话，他正常也能运行
  如何独立运行微应用?
*/

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
  
/* 
  注：
  0.  微应用导出相应的生命周期钩子，bootstrap等等等，内部可以不写逻辑，但是方法必须存在，因为内部会校验有没有这个方法
  1.  要求导出的方法必须是promise, props: 父应用传递过来的属性
  2.  bootstrap 只会在微应用初始化的时候调用一次,下次微应用重新进入时会直接调用 mount 钩子,不会再重复触发 bootstrap。 
* 
*/
// 子组件的协议就ok了(规定好的)
export async function bootstrap() {
  // 启动可以不做事
};
// props是父应用传递过来的属性,属性里面可以有全局的API，可以通信用，也可以放redux、vuex(看需求)
// 挂载拿到属性
export async function mount(props) {
  render(props)
}
// 组件卸载的时侯
export async function unmount(props) {
  instance.$destroy();
}