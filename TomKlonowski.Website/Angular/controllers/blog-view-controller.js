ngApp.controller("BlogViewController", ["$scope", "blogs", function ($scope, blogs) {
    $scope.currentBlog = blogs.getCurrentBlog();
    $('.blog').fadeIn();
}]);