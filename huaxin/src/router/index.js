import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home.vue'
// import Login from '../views/login/Login'
// import Shop from '../views/shop/Shop'
// import Register from '../views/register/Register'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* wepackChunkName: "home" */ '../views/home/Home.vue')
}, {
    path: '/home/:id',
    component: () => import( /* wepackChunkName: "home" */ '../views/home/Home.vue')
}, {
    path: '/myaccount',
    name: 'myaccount',
    component: () => import( /* wepackChunkName: "home" */ '../views/myaccount/myaccount.vue')
}, {
    path: '/myservice',
    name: 'myservice',
    component: () => import( /* wepackChunkName: "home" */ '../views/myservice/MyService.vue')
}
//     {
//     // 进入shop页面之后必须跟一个数字,不满足这个条件是无法访问页面的
//     path: '/shop/:id',
//     name: 'Shop',
//     component: () => import( /* wepackChunkName: "shop" */ '../views/shop/Shop')
// },{
//     path: '/register',
//     name: 'Register',
//     component: () => import( /* wepackChunkName: "register" */ '../views/register/Register'),
//     beforeEnter(to, from, next) {
//         const {
//             isLogin
//         } = localStorage
//         isLogin ? next({
//             name: 'Home'
//         }) : next()
//         // console.log(to, from)
//     }
//     }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach 指的是不管什么路由做一个切换的时候,它都会执行
// router.beforeEach((to, from, next) => {
//     /* 1. 普通的写法,实现功能 */
//     // const isLogin = localStorage.isLogin
//     // if (isLogin || to.name === 'Login') { // 如果已经在Login页面了, isLogin=false, 会陷入死循环
//     //   next() // 如果满足条件,则可以向下执行,访问相关页面
//     // } else {
//     //   next({ name: 'Login' }) // 如果没有登录, 就跳到Login这个页面
//     // }

//     /* 2. 使用解构写法,三元运算符,实现功能 */
//     const {
//         isLogin
//     } = localStorage;
//     const {
//         name
//     } = to;
//     const isLoginOrRegister = (name === "Login" || name === "Register");
//     (isLogin || isLoginOrRegister) ? next(): next({
//         name: 'Login'
//     })
// })
/*
  总结:
    next() 可以理解成往里面传一些网页 next({name: 'Login'}),中间件执行
  两个知识点:
    1. 每一个路由项目里面都可以加一个 beforeEnter 这样的函数, 这个函数在你进入到这个路由之前会被执行
    2. router 上面整体可以加一个 beforeEach 这样的一个函数, 这个函数会在路由每次做切换的时候执行,用这两个函数我们就可以做一些权限上的校验
*/
export default router
