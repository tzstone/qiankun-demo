const home = () => import('@/components/home')
const play = () => import('@/components/play')

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
  }
]