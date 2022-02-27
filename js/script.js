
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

    $(window).resize(
        checkWidth // проверит при изменении размера окна клиента
    );

    function checkWidth() {
        var windowWidth = $('body').innerWidth();


        if (windowWidth < 991) {

            document.querySelector(`.header-address`).innerText = "Московская область, г. Чехов";
        }
        else {
            document.querySelector(`.header-address`).innerText = "МО, г. Чехов, симферопольское шоссе, д. 2";

        }
        if (windowWidth < 768) {

            document.querySelector(`.contacts-container-address-link-p`).innerText = "Московская область, г. Чехов";
            document.querySelector(`.index-buildprices-head-headtext`).innerText = "Прайс на ремонт";
            document.querySelector(`.index-gallery-h2`).innerText = "Галерея";
        }
        else {
            document.querySelector(`.contacts-container-address-link-p`).innerText = "МО, г. Чехов, симферопольское шоссе, д. 2";
            document.querySelector(`.index-buildprices-head-headtext`).innerText = "Цены по ремонту квартир";
            document.querySelector(`.index-gallery-h2`).innerText = "Фотогалерея";
        }
    }

    checkWidth(); // проверит при загрузке страницы
    // window.onresize = checkWidth;
    // window.addEventListener('resize', checkWidth);


});

