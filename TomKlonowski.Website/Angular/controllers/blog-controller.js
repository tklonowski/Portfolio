ngApp.controller("BlogController",["$scope", "blogs", "$location", "$interval", function ($scope, blogs, $location, $interval) {

    function getBlog(blogId) {
        for (var i = 0; i < $scope.blogs.length; i += 1) {
            if ($scope.blogs[i].Id === blogId) {
                return $scope.blogs[i];
            }
        }
    }

    function navToBlogs()
    {
        $location.path('blogs');
    }

    $scope.deleteBlog = function(blogId) {
        blogs.deleteBlog(blogId);

        for (var i = 0; i < $scope.blogs.length; i += 1) {
            if ($scope.blogs[i].Id === blogId) {
                $scope.blogs.splice(i, 1);
                break;
            }
        }
    }

    $scope.addBlog = function () {
        blogs.createBlog($scope.newBlog.Title, $scope.newBlog.Tags, $scope.newBlog.Description, $scope.newBlog.Body, navToBlogs);
    }

    $scope.currentBlog = blogs.getCurrentBlog();

    $scope.date = new Date();
    $scope.blogs = blogs.getAllBlogs();

    $interval(function () {
        $scope.date = new Date();
    }, 1000);
}]);