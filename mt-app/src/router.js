import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'

import Index from '@/pages/index.vue'
import ChangeCity from '@/pages/changeCity.vue'
import GoodList from '@/pages/goodList.vue'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/changecity',
          name:'changecity',
          component:ChangeCity
        },
        {
          path:'/goodlist/:name',
          name:'goodlist',
          component:GoodList
        }
      ]
    },
    {
      path:'/blank',
      name:'blank',
      component:blankPage,
      children:[
        {
          path:'/login',
          name:'login',
          component:Login
        },
        {
          path:'/register',
          name:'register',
          component:Register
        }
      ]
    }
  ]
})
