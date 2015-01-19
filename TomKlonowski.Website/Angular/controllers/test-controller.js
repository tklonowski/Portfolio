(function (app) {
    app.controller('TestController', ['$scope', 'notificationService', function ($scope, notificationService) {

        $scope.addSuccess = function () {
            notificationService.success('Success!!!!');
        };

        $scope.addSuccessInterval = function () {
            if ($scope.interval) {
                notificationService.success('Success message that lasts ' + $scope.interval + ' milliseconds!!', $scope.interval);
            }
            else {
                notificationService.success('Success!!!! But you didn\'t specify a time. ;[');
            }
        };

        $scope.addError = function () {
            notificationService.error('Error ;[');
        }
    }]);
})(ngApp);