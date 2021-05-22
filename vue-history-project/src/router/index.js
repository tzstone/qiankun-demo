const home = () => import('@/components/home')
const play = () => import('@/components/play')
const chart = () => import('@/components/chart')

export default [
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
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  }
]
