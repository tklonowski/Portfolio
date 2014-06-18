var ngApp = angular.module("ngApp", ['ngRoute', 'ngResource'])
.factory('notes', function ($http, $q) {
    return {
        apiPath: 'http://localhost:59714/note/1',
        getAllItems: function () {
            //Creating a deferred object
            var deferred = $q.defer();

            //Calling Web API to fetch shopping cart items
            $http.get(this.apiPath).success(function (data) {
                //Passing data to deferred's resolve function on successful completion
                console.log("data" + data.Title);
                deferred.resolve(data);
            }).error(function () {

                //Sending a friendly error message in case of failure
                deferred.reject("An error occured while fetching items");
            });

            //Returning the promise object
            return deferred.promise;
        }
    }
})
.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/about", {
        controller: "AboutController",
        templateUrl: "/Scripts/angular/views/about.html"
    });

    $routeProvider.when("/", {
        controller: "HomeController",
        templateUrl: "/Scripts/angular/views/home.html"
    });


    $routeProvider.otherwise({ redirectTo: "/" });

    $locationProvider.html5Mode(true);

});;