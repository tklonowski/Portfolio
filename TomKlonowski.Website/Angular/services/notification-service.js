(function (app) {
    app.service('notificationService', ["$rootScope", function ($rootScope) {
        var EV_NOTIFICATION = 'notification';

        var error = function (message) {
            $rootScope.$broadcast(EV_NOTIFICATION, { messageType: 'error', message: message, duration: 0 });
        };

        var success = function (message, duration) {
            var dur = 0;

            if (duration) {
                dur = duration;
            }

            $rootScope.$broadcast(EV_NOTIFICATION, { messageType: 'success', message: message, duration: dur });
        };

        var info = function (message) {
            $rootScope.$broadcast(EV_NOTIFICATION, { messageType: 'success', message: message, duration: 0 });
        };

        this.EV_NOTIFICATION = EV_NOTIFICATION;
        this.error = error;
        this.success = success;
    }]);
})(ngApp);