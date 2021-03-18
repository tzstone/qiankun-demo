routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/app-angular1/', {
            template: '<home></home>'
        })
        .when('/app-angular1/about', {
            template: '<about></about>'
        })
        .otherwise('/app-angular1/');
}