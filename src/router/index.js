import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import login from "../pages/login/login";
Vue.use(VueRouter)
export default new VueRouter({
  routes: [

    {
      path: '/msite',
      component: Msite,
      meta:{
        flags:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        flags:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        flags:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        flags:true
      }
    } ,
    {
      path: '/',
      redirect: '/search'

    },
    {
      path: '/login',
      component: login,
    } ,
  ]
})
