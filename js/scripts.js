$(function () {
    var target = $('.resume-section'),
        body = $('body'),
        targetOffset = target.offset().top;

    window.onscroll = function () {
        if (window.pageYOffset > targetOffset) {
            body.addClass("header-fixed");
        } else {
            body.removeClass("header-fixed");
        }
    };
});