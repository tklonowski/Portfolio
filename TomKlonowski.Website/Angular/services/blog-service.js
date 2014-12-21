ngApp.service('blogs', ["$http", "$q", function ($http, $q) {
    var apiPath = apiUrl('/blog');
    var blogsPromise;

    var deleteBlog = function (blogId) {
        $http.delete(apiPath + "/" + blogId)
        .success(function (data, status, headers, config) {
            Util.addMessage('success', 'Blog Deleted Successfully', 'Your blog has been deleted successfully.');
        });
    }

    var createBlog = function (title, tags, description, body, callback) {
        $http.post(apiPath, { title: title, tags: tags, description: description, body: body })
            .success(function (data, status, headers, config) {
                blogs.unshift(data);
                Util.addMessage('success', 'Blog Added Successfully', 'Your blog titled <strong>' + data.Title + '</strong> has been added successfully.');
                callback(data.Id);
            });
    }

    var getBlogs = function () {
        if (!blogsPromise) {
            blogsPromise = $q.defer();

            $http.get(apiPath)
              .success(function (data) {
                  blogsPromise.resolve(data);
              }).error(function (data) {
                  blogsPromise.reject(data);
              });
        }

        return blogsPromise.promise;
    }

    return {
        getBlogs: getBlogs,
        createBlog: createBlog,
        deleteBlog: deleteBlog
    };
}]);