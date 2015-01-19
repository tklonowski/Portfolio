(function (app) {
    app.service('loggingService', ['$rootScope', 'notificationService', function ($rootScope, notificationService) {

        var logError = function (message, exception) {
            var logMessage = 'Error: ' + message;

            if (exception) {
                logMessage += '\n' + exception;
            }

            console.log(logMessage);
        };

        var logDebug = function (message) {
            console.log('Debug: ' + message);
        };

        this.logError = logError;
        this.logDebug = logDebug;
    }]);
})(ngApp);