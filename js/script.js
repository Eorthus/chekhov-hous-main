
$(document).ready(function () {

    function regular() {

        let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
        document.body.innerHTML = document.body.innerHTML.replace(pattern, '+7($2)$3-$4-$5');
    }
    regular();


    $('.header-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 500,
        Infinity: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.index-gallery-slider').slick({
        Infinity: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
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
    $('.contacts-gallery-slider').slick({
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
        variableWidth: true,
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


    $(window).scroll(function () {
        // если пользователь прокрутил страницу более чем на 200px
        if ($(this).scrollTop() > 200) {
            // то сделать кнопку scrollup видимой
            $('.back_to_top').fadeIn();
        }
        // иначе скрыть кнопку scrollup
        else {
            $('.back_to_top').fadeOut();
        }
    });

});

