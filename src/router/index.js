import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/gjh',
    component:() =>import('../views/gjh.vue')
  },
  {
    path: '/sy',
    component:() =>import('../views/sy.vue')

  },
  {
    path: '/:tab',
    component: Home
  },
  {
    path: '/topic/:topicId',
    name: 'topic',
    component: () => import('../views/Topic.vue')
  },
  {
    path:'/user/:loginname',
    name:'user',
    component:() =>import('../views/User.vue')
  },


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router