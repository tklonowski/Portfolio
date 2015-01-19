var Global = {

    init: function (serviceStackUrl) {
        Global.loadUI();
    },

    loadUI: function () {
        skel.init({
            reset: 'full',
            breakpoints: {
                'global': { range: '*', href: '/content/style.css' },
                'desktop': { range: '737-', href: '/content/style-desktop.css', containers: 1200, grid: { gutters: 25 } },
                '1000px': { range: '737-1200', href: '/content/style-1000px.css', containers: 960, grid: { gutters: 25 }, viewport: { width: 1080 } },
                'mobile': { range: '-736', href: '/content/style-mobile.css', containers: '100%!', grid: { collapse: true, gutters: 15 }, viewport: { scalable: false } }
            }
        });
    }
};