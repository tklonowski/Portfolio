ngApp.service('blogs', ["$http", "$q", function ($http, $q) {
    var apiPath = apiUrl('/blog');

    var blogs = [];
    var currentBlog = null;

    var getAllBlogs = function () {
        return blogs;
    }

    var deleteBlog = function (blogId) {
        $http.delete(apiPath + "/" + blogId)
        .success(function (data, status, headers, config) {
            Util.addMessage('success', 'Blog Deleted Successfully', 'Your blog has been deleted successfully.');
        });
    }
    
    var setCurrentBlog = function (blogId) {
        var id = parseInt(blogId);

        for (var i = 0; i < blogs.length; i += 1) {
            if (blogs[i].Id === id) {
                currentBlog = blogs[i];
            }
        }
    }

    var getCurrentBlog = function () {
        return currentBlog;
    }

    var createBlog = function (title, tags, description, body, callback) {
        $http.post(apiPath, { title: title, tags: tags, description: description, body: body })
            .success(function (data, status, headers, config) {
                blogs.unshift(data);
                Util.addMessage('success', 'Blog Added Successfully', 'Your blog titled <strong>' + data.Title + '</strong> has been added successfully.');
                callback(data.Id);
            });
    }

    $http.get(apiPath).success(function (data) {
        if (data.length > 0) {
            for (var i = data.length - 1; i >= 0; i -= 1) {
                blogs.unshift(data[i]);
            }
        }
    });

    return {
        getAllBlogs: getAllBlogs,
        deleteBlog: deleteBlog,
        createBlog: createBlog,
        setCurrentBlog: setCurrentBlog,
        getCurrentBlog: getCurrentBlog
    };

}]);