(function (app) {
    app.directive('loading', function () {
        return {
            restrict: 'E',
            templateUrl: "/Angular/directives/templates/loading.html"
        }
    });
})(ngApp);