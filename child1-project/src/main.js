// 修改运行时的 publicPath, 入口文件顶部引入
import './public-path';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = null
let instance = null
function render(props = {}) {
  const {container} = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-child1/' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}