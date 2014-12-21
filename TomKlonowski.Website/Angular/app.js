var ngApp = angular.module("ngApp", ['ngRoute', 'ngResource', 'ui.bootstrap'])
.run(["$rootScope", "$route", "blogs", function ($rootScope, $route, blogs) {
    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
        $rootScope.title = $route.current.title;

        switch($route.current.originalPath) {
            case '/blogs/:id':
                //should be loaded based on architecture, might want to change to check, and load if not.
                blogs.setCurrentBlog($route.current.params.id);
                break;
            default:
        }
    });
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
        controller: "BlogController",
        templateUrl: "/Angular/views/blogs/add.html",
        title: "Add Blog"
    });

    $routeProvider.when("/blogs/:id", {
        controller: "BlogController",
        templateUrl: "/Angular/views/blogs/view.html",
        title: "View Blog"
    });

    $routeProvider.otherwise(
        { templateUrl: '/Angular/views/404.html' }
        );

    $locationProvider.html5Mode(true);

}]);;