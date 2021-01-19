window.onload = function () {

    // Плавный скрол к нужному блоку меню
    $(function () {
        $('#menu').on('click', 'a', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1300);
        })
    })
    // скрол при клике на arrow down in  header
    $(function () {
        $('#arrow').on('click', 'a', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1300);
        })
    })
    //прокрутка вверх при клике на кнопку внизу страницы справа

    $(function () {
        $(document).on('click', '#button-top', function (event) {
            event.preventDefault();
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({ scrollTop: 0 }, 1300);

        })
    })
    // Изменение менюшки при скроле

    $(document).scroll(() => {
        if ($(window).scrollTop() > 100) {
            $('.header-nav').addClass("header-nav__scroll");

        } else {
            $('.header-nav').removeClass('header-nav__scroll');
        }
    })

    // works слайдер

    $('.slider').slick({
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });
    // our team слайдер

    $('.slider-team').slick({
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    PrevArrows: false,
                    NextArrows: false,
                    dots: true,
                }
            },
        ]

    });

    // кнопка показать больше, активна после 568px

    let btnMore = $('#more');
    let aboutText = $('.about-text');
    let smallScreen = 568;

    if (window.innerWidth < smallScreen) {
        aboutText.addClass('hide');
    }

    btnMore.click(function () {
        let width = window.innerWidth;
        // console.log(width);
        if (width < smallScreen) {
            if (aboutText.hasClass('hide')) {
                aboutText.removeClass('hide');
                btnMore.html('See Less');
                // console.log('remove hide')
                return false;
            } else {
                btnMore.html('See More');
                aboutText.addClass('hide');
                // console.log('add hide')
                return false;
            }
        }
    });

    $(window).resize(function (e) {
        // console.log(e);
        let width = e.target.innerWidth;
        // console.log(width);
        let btnMore = $('#more');
        let aboutText = $('.about-text');
        if (width < smallScreen) {
            btnMore.html('See More');
            aboutText.addClass('hide');

        } else {
            btnMore.html('See More');
            aboutText.removeClass('hide');
        }
    });

}

//карта
function initMap() {
    let uluru = {

        lat: -7.931270901212077,
        lng: 112.63758872564094
    };

    // let styles = [{
    //     stylers: [{
    //         lightness: 1,
    //     }]
    // }];
    // let styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    let map = new google.maps.Map(document.querySelector(".contact-map"), {
        center: uluru,
        zoom: 14,
        backgroundColor: "#9f9acf",
        disableDefaultUI: true,
    });
    // map.mapTypes.set('map_style', styledMap);
    // map.setMapTypeId('map_style');

    google.maps.event.addListenerOnce(map, 'idle', function () {
        $('.gm-style').css("opacity", 0.3)
    });

}
