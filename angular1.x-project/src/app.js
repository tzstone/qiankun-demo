import './public-path'
import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import ngRoute from 'angular-route';
import components from './components';
import appRouter from './app.router';
import './css/main.less';
import style from './app.less';
//import './app.css';
let appComponent = {
    restrict    : 'E',
    template    : require('./app.html'),
    controller  : function () {
        this.class = style;
    },
    controllerAs: 'app'
};

export default angular.module('xxxApp', [ngRoute, components])
    .config(appRouter)
    .component('app', appComponent)
    .name;

const ngLifecycles = singleSpaAngularJS({
    angular: angular,
    mainAngularModule: 'xxxApp',
    uiRouter: true,
    preserveGlobal: false,
    template: require('./app.html'),
});

export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;