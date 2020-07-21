import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Single from '@/views/Single'
import Create from '@/views/Create'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/new',
    name: 'Create',
    component: Create,
  },
  {
    path: '/news/:id',
    name: 'Single',
    component: Single
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
