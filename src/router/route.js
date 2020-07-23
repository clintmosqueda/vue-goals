import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Single from '@/views/Single'
import Create from '@/views/Create'
import Sample from '@/views/Sample'

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
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
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
