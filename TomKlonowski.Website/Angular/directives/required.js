(function (app) {
    app.directive('required', function () {
        return {
            restrict: 'E',
            templateUrl: "/Angular/directives/templates/required.html"
        }
    })
})(ngApp);