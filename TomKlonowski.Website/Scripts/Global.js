var Global = {

    init: function (serviceStackUrl) {
        Util.init();
        Navigation.init();
    },

    loadVars: function (siteUrl, serviceStackUrl) {
        window.apiUrl = function (url) {
            return serviceStackUrl + url;
        }

        window.siteUrl = function (url) {
            return siteUrl + url;
        }
    }
};