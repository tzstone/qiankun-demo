import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/components/home')
const play = () => import('@/components/play')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
