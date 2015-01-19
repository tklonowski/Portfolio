(function (app) {
    app.service('blogService', ["$http", "$q", "configurationService", function ($http, $q, configurationService) {
        var apiPath = configurationService.getApiUrl('/blog');

        var deleteBlog = function (blogId) {
            $http.delete(apiPath + "/" + blogId)
            .success(function (data, status, headers, config) {
            });
        };

        var createBlog = function (title, tags, description, body) {
            var defer = $q.defer();

            $http.post(apiPath, { title: title, tags: tags, description: description, body: body })
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data) {
                    defer.reject(data);
                });

            return defer.promise;
        };

        var getBlogs = function () {
            var defer = $q.defer();

            $http.get(apiPath)
              .success(function (data) {
                  defer.resolve(data);
              }).error(function (data) {
                  defer.reject(data);
              });


            return defer.promise;
        };

        var getBlog = function (blogId) {
            var defer = $q.defer();

            $http.get(apiPath + '/' + blogId)
              .success(function (data) {
                  defer.resolve(data);
              }).error(function (data) {
                  defer.reject(data);
              });

            return defer.promise;
        };

        return {
            getBlogs: getBlogs,
            getBlog: getBlog,
            createBlog: createBlog,
            deleteBlog: deleteBlog
        };
    }]);
})(ngApp);