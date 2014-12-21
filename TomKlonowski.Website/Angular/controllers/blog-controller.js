(function (app) {
    app.controller("BlogController", ["$scope", "blogs", "$location", function ($scope, blogs, $location) {

        $scope.loaded = false;

        var handleGetBlogsSuccess = function (data) {
            $scope.blogs = data;
            $scope.loaded = true;
        };

        blogs.getBlogs().then(handleGetBlogsSuccess);
    }]);
})(ngApp);