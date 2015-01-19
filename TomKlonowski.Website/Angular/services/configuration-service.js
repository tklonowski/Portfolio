(function (app) {
    app.service('configurationService', ['$http', '$q', function ($http, $q) {
        var serviceStackUrl;
        var siteUrl;

        var getApiUrl = function (relativeUrl) {
            return serviceStackUrl + relativeUrl;
        };

        var setServiceStackUrl = function (url) {
            serviceStackUrl = url;
        };

        var getServiceStackUrl = function () {
            return serviceStackUrl;
        };

        var setSiteUrl = function (url) {
            siteUrl = url;
        };

        var getSiteUrl = function () {
            return siteUrl;
        };

        var loadConfiguration = function () {
            var defer = $q.defer();

            $http.get('/configuration/all')
              .success(function (data) {
                  defer.resolve(data);
              }).error(function (data) {
                  defer.reject(data);
              });

            return defer.promise;
        };

        return {
            loadConfiguration: loadConfiguration,
            getApiUrl: getApiUrl,
            setServiceStackUrl: setServiceStackUrl,
            getServiceStackUrl: getServiceStackUrl,
            setSiteUrl: setSiteUrl,
            getSiteUrl: getSiteUrl
        };
    }]);
})(ngApp);