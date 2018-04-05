$(document).ready(function () {
    //sticky navbar
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', '#000000').css('opacity', '0.7');
            } else {
                $('.navbar-default').css('background-color', 'transparent').css('opacity', '1');
            }
        });
    }
});


$(".home").click(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$(".about-us").click(function () {
    $('html, body').animate({
        scrollTop: $("#power").offset().top
    }, 1000);
});

$(".services").click(function () {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
});
$(".prices").click(function () {
    $('html, body').animate({
        scrollTop: $("#prices").offset().top
    }, 1000);
});
$(".contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#share").offset().top
    }, 1000);
});
