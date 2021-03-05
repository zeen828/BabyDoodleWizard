import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/views/Game.vue')
  },
  {
    path: '/magic/playingcard',
    name: 'PlayingCard',
    component: () => import('@/views/magic/PlayingCard.vue')
  },
  {
    path: '/racing/car',
    name: 'Car',
    component: () => import('@/views/racing/Car.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/views/Tests.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
