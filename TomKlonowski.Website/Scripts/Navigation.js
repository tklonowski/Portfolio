var Navigation = {

    init: function () {

    },

    setActive: function (item) {
        $('#menu li').removeClass('selected');
        $(item).parent('li').addClass('selected');
    }
};