(function (app) {
    app.controller('BlogAddController', ['$scope',
                                         '$location',
                                         'blogService',
                                         'notificationService', 
                                         function ($scope,
                                                   $location,
                                                   blogService,
                                                   notificationService) {

        $scope.submitForm = function () {
            var handleCreateSuccess = function (data) {
                notificationService.success('Successfully added blog.');
                $location.path('blogs');
            };

            var handleCreateFailure = function (data) {
                notificationService.error('Unable to add the blog. ;[');
            };

            var handleCreateCleanup = function (data) {
            };

            if ($scope.form.$valid) {
                blogService.createBlog($scope.blog.title, $scope.blog.tags, $scope.blog.description, $scope.blog.body).then(handleCreateSuccess, handleCreateFailure)['finally'](handleCreateCleanup);
            }
        };

    }]);
})(ngApp);