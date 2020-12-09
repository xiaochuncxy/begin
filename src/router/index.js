import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cms',
    name: 'Cms',
    component: () => import('../views/Cms/Cms.vue'),
    children: [{
      path: '/cms/',
      name: 'Cms',
      component: () => import('../views/Cms/userList.vue'),
    }, {
      path: '/cms/1-1',
      name: 'Cms',
      component: () => import('../views/Cms/userList.vue'),
    }, {
      path: '/cms/2-1',
      name: 'Cms',
      component: () => import('../views/Cms/jueseList.vue'),
    }, {
      path: '/cms/2-2',
      name: 'Cms',
      component: () => import('../views/Cms/quanxian.vue'),
    }, {
      path: '/cms/3-1',
      name: 'Cms',
      component: () => import('../views/Cms/shopList.vue'),
    }, {
      path: '/cms/3-2',
      name: 'Cms',
      component: () => import('../views/Cms/fenlei.vue'),
    }, {
      path: '/cms/3-3',
      name: 'Cms',
      component: () => import('../views/Cms/shopFenlei.vue'),
    }, {
      path: '/cms/4-1',
      name: 'Cms',
      component: () => import('../views/Cms/dingDanList.vue'),
    }, {
      path: '/cms/5-1',
      name: 'Cms',
      component: () => import('../views/Cms/dataReport.vue'),
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router