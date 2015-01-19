(function (app) {
    app.controller('BlogViewController', ['$scope', 'blogService', '$routeParams', function ($scope, blogService, $routeParams) {
        $scope.blogLoaded = false;

        var handleGetBlogSuccessful = function (data) {
            $scope.blog = data;
            $scope.blogLoaded = true;
        };

        blogService.getBlog($routeParams.id).then(handleGetBlogSuccessful);
    }]);
})(ngApp);