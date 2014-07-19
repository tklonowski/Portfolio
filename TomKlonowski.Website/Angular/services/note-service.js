ngApp.factory('notes', ["$http", "$q", function ($http, $q) {
    return {
        apiPath: apiUrl('/note/1'),
        getAllItems: function () {

            var deferred = $q.defer();

            $http.get(this.apiPath).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("An error occured while fetching items");
            });

            return deferred.promise;
        }
    }
}])