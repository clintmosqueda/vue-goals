import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
