routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/app-angular1', {
            template: '<home></home>'
        })
        .when('/app-angular1/about', {
            template: '<about></about>'
        });
        // .otherwise('/'); // 不能有otherwise, 否则切换微应用有异常
}