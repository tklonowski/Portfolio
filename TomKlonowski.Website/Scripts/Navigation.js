var Navigation = {

    init: function () {
        $dropdown = $(".nav-dropdown");
        $container = $dropdown.parent().closest('li');
        $navItem = $dropdown.prev();
        $fadeSpeed = 100;

        $container.mouseover(function () {
            //$dropdown.fadeIn($fadeSpeed);
            $dropdown.show();
            $container.addClass('hover');
        });

        $container.mouseleave(function () {
            //$dropdown.fadeOut($fadeSpeed);
            $dropdown.hide();
            $container.removeClass('hover');
        });
    },

    setActive: function (item, isDropdown) {
        //$dropdowns = $('.nav-dropdown');
        //$('#menu li').removeClass('selected');
        //$(item).parent('li').addClass('selected');
    },

    hideParentDropdown: function (item) {
        $dropdown = $(item).closest('.nav-dropdown');
        $container = $dropdown.parent().closest('li');
        $dropdown.fadeOut($fadeSpeed);
        $container.removeClass('hover');
    }
};