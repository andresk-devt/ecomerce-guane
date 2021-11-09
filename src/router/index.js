import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../layout/Layout.vue'),
    children:[
      {
      path: 'profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: 'products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: 'orders',
      component: () => import('../views/Orders.vue'),
    },
  ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
