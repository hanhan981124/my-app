import Vue from 'vue'
import VueRouter from 'vue-router'
//1创建路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Disease from '../views/Disease.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)


//2组建于路由映射
const routes = [
//主路由
  {
    path:'/',
    component:Main,
    children:[
    //子路由，嵌套路由
      { path: 'home', component: Home },
      { path: 'disease', component: Disease}
     


    ]
  },
    { path: '/user', component: User },
    { path: '/search', component: Search },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router

