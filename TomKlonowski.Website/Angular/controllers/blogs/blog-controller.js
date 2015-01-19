(function (app) {
    app.controller("BlogController", ["$scope", "blogService", "$location", function ($scope, blogService, $location) {
        var blogIndex = 0;
        var pageSize = 9;

        $scope.loaded = false;
        $scope.hasBlogs = false;
        $scope.showPageForwardButton = false;
        $scope.showPageBackButton = false;

        $scope.pageForward = function () {
            $scope.loaded = false;
            blogIndex++;
            blogService.getBlogs().then(handleGetBlogsSuccess);
        };

        $scope.pageBackward = function () {
            $scope.loaded = false;
            blogIndex--;
            blogService.getBlogs().then(handleGetBlogsSuccess);
        };

        var setCurrentBlogs = function (blogData) {
            var blogs = [];

            for (i = (blogIndex * 9) ; i < ((blogIndex + 1) * 9) ; i++) {
                if (blogData[i]) {
                    blogs[i - (blogIndex * 9)] = blogData[i];
                }
                else {
                    break;
                }
            }

            $scope.blogs = blogs;
        };

        var setPaginationMessage = function (blogData) {
            var paginationMessage = "Showing Blogs " + ((blogIndex * 9) + 1) + " to ";
            if (((blogIndex * 9) + 9) > blogData.length) {
                paginationMessage += blogData.length;
            }
            else {
                paginationMessage += ((blogIndex * 9) + 9);
            }
            paginationMessage += " of " + blogData.length;

            $scope.paginationMessage = paginationMessage;
        };

        var setPaginationButtons = function (blogData) {
            if (((blogIndex * 9) + 9) > blogData.length) {
                $scope.showPageForwardButton = false;
            }
            else {
                $scope.showPageForwardButton = true;
            }

            if (blogIndex > 0) {
                $scope.showPageBackButton = true;
            }
            else {
                $scope.showPageBackButton = false;
            }
        };

        var handleGetBlogsSuccess = function (data) {
            setCurrentBlogs(data);
            setPaginationMessage(data);
            setPaginationButtons(data);

            if (data.length > 0) {
                $scope.hasBlogs = true;
            }

            $scope.loaded = true;
        };

        var handleGetBlogsFailure = function (data) {
            $scope.loaded = true;
        };

        var handleGetBlogsCleanup = function (data) {
        };

        blogService.getBlogs().then(handleGetBlogsSuccess, handleGetBlogsFailure)['finally'](handleGetBlogsCleanup);
    }]);
})(ngApp);