import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Index from '@/pages/index.vue'

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
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
