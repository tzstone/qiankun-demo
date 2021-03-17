import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'spa-history-project',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-spa-history',
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
]);
// 启动 qiankun
start();