ngApp.controller('NavigationController', ["$scope", "$location", function ($scope, $location) {
    $scope.isActive = function (route) {
        $paths = $location.path().split('/');
        $homePath = "/" + $paths[1];

        return route === $homePath;
    }
}]);
