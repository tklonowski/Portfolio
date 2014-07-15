ngApp.controller("BlogController",["$scope", "blogs", "$location", "$interval", function ($scope, blogs, $location, $interval) {

    function getBlogs() {
        blogs.getAllItems().then(function (data) {
            $scope.blogs = data;
            console.log('hit getAllItems again');
        },
    function (errorMessage) {
        $scope.error = errorMessage;
    });
    }

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

    if (!$scope.blogs) {
        getBlogs();
    }

    $scope.date = new Date();

    $interval(function () {
        $scope.date = new Date();
    }, 1000);
}]);