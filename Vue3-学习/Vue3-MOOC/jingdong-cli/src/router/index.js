import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    // 需求: 如果已经登录了(isLogin=true),再去访问Login页面,跳转到首页而不是登录页
    // beforeEnter 指的是只有你访问 Login 这个页面之前才会执行这个函数
    beforeEnter(to, from, next) {
      // to 指即将跳转到的页面,from 指的是 上一个页面是哪里
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      // if (isLogin) {
      //   next({name: 'Home'})
      // } else {
      //   // 正常显示当前的页面
      //   next()
      // }
      // console.log(to, from)
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      // console.log(to, from)
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach 指的是不管什么路由做一个切换的时候,它都会执行
router.beforeEach((to, from, next) => {
  /* 1. 普通的写法,实现功能 */
  // const isLogin = localStorage.isLogin
  // if (isLogin || to.name === 'Login') { // 如果已经在Login页面了, isLogin=false, 会陷入死循环
  //   next() // 如果满足条件,则可以向下执行,访问相关页面
  // } else {
  //   next({ name: 'Login' }) // 如果没有登录, 就跳到Login这个页面
  // }

  /* 2. 使用解构写法,三元运算符,实现功能 */
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next(): next({ name: 'Login' })
})
/*
  总结:
    next() 可以理解成往里面传一些网页 next({name: 'Login'}),中间件执行
  两个知识点:
    1. 每一个路由项目里面都可以加一个 beforeEnter 这样的函数, 这个函数在你进入到这个路由之前会被执行
    2. router 上面整体可以加一个 beforeEach 这样的一个函数, 这个函数会在路由每次做切换的时候执行,用这两个函数我们就可以做一些权限上的校验
*/
export default router
