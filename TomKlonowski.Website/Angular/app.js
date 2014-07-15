var ngApp = angular.module("ngApp", ['ngRoute', 'ngResource'])
.run(["$rootScope", "$route", function ($rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
        $rootScope.title = $route.current.title;
    });
}])
.factory('notes', ["$http", "$q", function ($http, $q) {
    return {
        apiPath: apiUrl('/note/1'),
        getAllItems: function () {

            var deferred = $q.defer();

            $http.get(this.apiPath).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occured while fetching items");
            });

            return deferred.promise;
        }
    }
}])
.factory('blogs', ["$http", "$q", function ($http, $q) {
    return {
        apiPath: apiUrl('/blog'),
        getAllItems: function () {
            var deferred = $q.defer();

            $http.get(this.apiPath).success(function (data) {
                deferred.resolve(data);
            }).error(function () {

                deferred.reject("An error occured while fetching items");
            });

            return deferred.promise;
        },
        deleteBlog: function (blogId) {
            $http.delete(this.apiPath + "/" + blogId)
            .success(function (data, status, headers, config) {
                Util.addMessage('success', 'Blog Deleted Successfully', 'Your blog has been deleted successfully.');
            });;
        },
        createBlog: function (title, tags, description, body, callback) {
            $http.post(this.apiPath, { title: title, tags: tags, description: description, body: body })
                .success(function (data, status, headers, config) {
                    Util.addMessage('success', 'Blog Added Successfully', 'Your blog titled <strong>' + data.Title + '</strong> has been added successfully.');
                    callback();
                });;
        }
    }
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

    $routeProvider.otherwise({ redirectTo: "/" });

    $locationProvider.html5Mode(true);

}]);;