(function (app) {
    app.controller('NavigationController', ['$rootScope', '$scope', '$location', '$interval', 'notificationService', function ($rootScope, $scope, $location,$interval, notificationService) {
        var notificationId = 0;
        var defaultTTL = 10000;
        var showMenu = false;
        $scope.notifications = [];
        $scope.navCss = 'container';

        $scope.isActive = function (route) {
            $paths = $location.path().split('/');
            $homePath = '/' + $paths[1];

            return route === $homePath;
        };

        $scope.removeNotification = function (notification) {
            for (var i = 0; i < $scope.notifications.length; i++) {
                if ($scope.notifications[i].id === notification.id) {
                    $scope.notifications.splice(i, 1);
                }
            }
        };

        $scope.toggleMenu = function () {
            if (showMenu) {
                $scope.navCss = 'container';
                showMenu = false;
            }
            else {
                $scope.navCss = 'container display-container';
                showMenu = true;
            }
        };

        $scope.hideMenu = function () {
            $scope.navCss = 'container';
            showMenu = false;
        };

        var addMessage = function (event, args) {
            var notification = { id: notificationId, messageType: args.messageType, message: args.message, css: 'notification ' + args.messageType };

            var TTL = defaultTTL;

            if (args.duration !== 0) {
                TTL = args.duration;
            }

            $interval(function () {
                if(args.messageType !== 'error')
                {
                    $scope.removeNotification(notification);
                }
            }, TTL, 1);
            $scope.notifications.push(notification);
            notificationId++;
        };

        $rootScope.$on(notificationService.EV_NOTIFICATION, addMessage);
    }]);
})(ngApp);