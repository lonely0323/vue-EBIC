import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/login/login.vue'
import Reg from '../views/register/register.vue'
import GameContent from '../views/GameContent/GameContent'
import userCenter from "../views/userCenter/userCenter"
import mydetails from "../views/userCenter/mydetails"
import overview from "../views/userCenter/overview"
import Privacy from "@/views/userCenter/Privacy";
import payment from '@/views/userCenter/payment'
import transaction from '@/views/userCenter/transaction'
import connect from '@/views/userCenter/connect'
import games from "../views/userCenter/games"
import security from "../views/userCenter/security"
import about from '../views/about/About.vue'
import store from '../store/index'




Vue.use(VueRouter)



  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path:'/login',
    name: 'login',
	component:Login
  },
  {
  	path:'/register',
    name:'register',
  	component:Reg,
    meta:{
      requireAuth: true,
    }
  },
  {
    path: '/GameContent',
    component: GameContent
  },
    {
      path: '/userCenter',
      component: userCenter,
      children: [
        {
          path: 'mydetails',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mydetails',
          component: mydetails
        },
        {
          path: 'overview',
          name: 'overview',
          component: overview
        },
        {
          path: 'games',
          name: 'games',
          component: games
        },
        {
          path: 'security',
          name: 'security',
          component: security
        },
        {
          path: 'Privacy',
          name:'Privacy',
          component: Privacy
        },
        {
          path: 'payment',
          name: 'payment',
          component: payment
        },
        {
          path: 'transaction',
          name:'transaction',
          component: transaction
        },
        {
          path: 'connect',
          name: 'connect',
          component: connect
        },
      ]
    },
    {
      path: '/about',
      component: about
    }

]

function beforeEach(param) {

}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  router:beforeEach((to, from, next) => {
    const token = store.state.token
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) { // 通过vuex state获取当前的token是否存在
        next()
      } else {
        console.log('该页面需要登陆')
        next({
          path: '/login'
          // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next()
    }
  })


})



export default router




