import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start, initGlobalState } from 'qiankun';

// 注册微应用
registerMicroApps([
  {
    name: 'spa-history-project',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-spa-history',
    // 传递给子应用的数据, 如父应用的router, store等
    props: {
      router
    }
  },
  {
    name: 'spa-hash-project',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/app-spa-hash',
  },
  {
    name: 'purehtml',
    entry: '//localhost:8083',
    container: '#container',
    activeRule: '/app-jquery',
  },
  {
    name: 'angular1',
    entry: '//localhost:8084',
    container: '#container',
    activeRule: '/app-angular1',
  },
], {
  beforeLoad(app) {
    // spa-history-project 复用父项依赖
    if (['spa-history-project'].includes(app.name)) {
      if (window.Vue2) {
        window.Vue = window.Vue2
        window.Vue2 = undefined
      }
    } else {
      if (window.Vue) {
        window.Vue2 = window.Vue
        window.Vue = undefined
      }
    }
  }
});

// 定义全局状态
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun', // 设置初始值
});

// 在当前应用监听全局状态
onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

// 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

// 启动 qiankun
start();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
