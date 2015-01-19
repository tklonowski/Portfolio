var ngApp = angular.module("ngApp", ['ngRoute', 'ngResource', 'ui.bootstrap'])
.run(["$rootScope", "$route", "configurationService", function ($rootScope, $route, configurationService) {
    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
        $rootScope.title = $route.current.title;
    });

    var handleLoadConfiguration = function (data) {
        configurationService.setServiceStackUrl(data.ServiceStackUrl);
        configurationService.setSiteUrl(data.SiteUrl);
    };

    configurationService.loadConfiguration().then(handleLoadConfiguration);
}])
.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider.when("/", {
        controller: "HomeController",
        templateUrl: "/Angular/views/home.html",
        title: "Home"
    });

    $routeProvider.when("/about", {
        controller: "AboutController",
        templateUrl: "/Angular/views/about.html",
        title: "About"
    });

    $routeProvider.when("/test", {
        controller: "TestController",
        templateUrl: "/Angular/views/test.html",
        title: "Test"
    });

    //Blogs
    $routeProvider.when("/blogs", {
        controller: "BlogController",
        templateUrl: "/Angular/views/blogs/index.html",
        title: "Blogs"
    });

    $routeProvider.when("/blogs/add", {
        controller: "BlogAddController",
        templateUrl: "/Angular/views/blogs/add.html",
        title: "Add Blog"
    });

    $routeProvider.when("/blogs/:id", {
        controller: "BlogViewController",
        templateUrl: "/Angular/views/blogs/view.html",
        title: "View Blog"
    });

    $routeProvider.otherwise({
        templateUrl: '/Angular/views/404.html'
    });

    $locationProvider.html5Mode(true);
}]);;