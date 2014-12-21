ngApp.directive('loading', function () {
    return {
        restrict: 'E',
        template: '<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>'
    }
});