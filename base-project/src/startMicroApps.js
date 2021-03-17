import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'spa-history-project',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-spa-history/',
  },
  {
    name: 'spa-hash-project',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/app-spa-hash/',
  },
]);
// 启动 qiankun
start();