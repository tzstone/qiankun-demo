import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'child1-project',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-child1',
  },
  {
    name: 'child2-project',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/app-child2',
  },
]);
// 启动 qiankun
start();