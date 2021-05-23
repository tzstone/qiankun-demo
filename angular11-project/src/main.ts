import './public-path';
import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}
​
const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      AppModule,
    );
  },
  template: '<app-root />',
  Router,
  // NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

// export async function bootstrap(props: Object) {
//   console.log(props);
// }

// export async function mount(props: Object) {
//   render();
// }

// export async function unmount(props: Object) {
//   console.log(props);
//   // @ts-ignore
//   app.destroy();
// }
