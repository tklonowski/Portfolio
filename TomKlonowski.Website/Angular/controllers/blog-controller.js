ngApp.controller("BlogController", ["$scope", "blogs", "$location", "$interval", function ($scope, blogs, $location, $interval) {

    function getBlog(blogId) {
        for (var i = 0; i < $scope.blogs.length; i += 1) {
            if ($scope.blogs[i].Id === blogId) {
                return $scope.blogs[i];
            }
        }
    }

    function postBlogCreation(blogId) {
        $location.path('blogs');
    }

    $scope.deleteBlog = function (blogId) {
        blogs.deleteBlog(blogId);

        for (var i = 0; i < $scope.blogs.length; i += 1) {
            if ($scope.blogs[i].Id === blogId) {
                $scope.blogs.splice(i, 1);
                break;
            }
        }
    }

    $scope.addBlog = function () {
        blogs.createBlog($scope.newBlog.Title, $scope.newBlog.Tags, $scope.newBlog.Description, $scope.newBlog.Body, postBlogCreation);
    }

    $scope.date = new Date();
    $scope.blogs = blogs.getAllBlogs();

    $interval(function () {
        $scope.date = new Date();
    }, 1000);
}]);

ngApp.controller("BlogViewController", ["$scope", "blogs", function ($scope, blogs) {
    $scope.currentBlog = blogs.getCurrentBlog();
    $('.blog').fadeIn();
}]);