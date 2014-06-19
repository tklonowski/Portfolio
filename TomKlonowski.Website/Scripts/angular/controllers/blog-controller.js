ngApp.controller("BlogController", function ($scope, blogs) {
    function getBlogs() {
        blogs.getAllItems().then(function (data) {
            $scope.blogs = data;
        },
    function (errorMessage) {
        $scope.error = errorMessage;
    });
    }

    getBlogs();

    console.log("blogs: " + $scope.blogs);
});