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
    base: window.__POWERED_BY_QIANKUN__ ? '/app-spa-history/' : '/',
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
  const { router } = props
  console.log('router from parent', router)
  console.log('[vue] props from main framework', props);
  render(props);

  // 监听全局状态变化
  props.onGlobalStateChange(
    (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  );
  
  // 设置全局状态, 只能修改已存在的一级属性
  props.setGlobalState({
    hhh: 1, // 未在主应用定义, 不生效
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}