
$(document).ready(function () {
    $('#header-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 500,
        Infinity: true,
        fade: true,
        cssEase: 'linear',
    });
    $('.index-gallery-slider').slick({
        Infinity: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.index-projects-slider').slick({
        infinity: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    infinity: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.index-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 500,
        fade: true,
        Infinity: true,
        cssEase: 'linear',
    });
    $(".phone_mask").mask("+7(999)999-99-99");
    $(function () {
        var b = $("#button");
        var w = $("#wrapper");
        var l = $("#list");

        // w.height(l.outerHeight(true));

        b.click(function () {

            if (w.hasClass('open')) {
                w.removeClass('open');
                w.height(0);
            } else {
                w.addClass('open');
                w.height(l.outerHeight(true));
            }

        });
    });
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

});

