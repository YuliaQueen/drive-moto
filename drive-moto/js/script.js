function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function () {
    //slick-slider для banner-section
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./img/arrow-right.svg" alt=""></button>',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    //owl-carousel
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 4,
            autoWidth: true,
            margin: 5,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    nav: false,
                },
                // breakpoint from 480 up
                768: {
                    items: 3,
                    nav: false,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                    nav: true
                }
            }
        });
    });

    //переключение табов
    $('.tab').on('click', function (e) {
        e.preventDefault()

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    //сердечки
    $('.product-item-favorite').on('click', function () {
        $(this).toggleClass('product-item-favorite--active')
    });

    //переключение баттонов режима отображения каталога
    $('.catalog__filter-button').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $(this).siblings().removeClass('catalog__filter-button--active');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $('.product-item__wrapper').addClass('product-item__wrapper--list')
    })

    $('.catalog__filter-btngrid').on('click', function () {
        $('.product-item__wrapper').removeClass('product-item__wrapper--list')
    })


    //подключение jq-form-styler
    $('.filter-style').styler();


    //клик на тайтл в фильтре
    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    })

    //переключение радио-баттонов в фильтре акций
    $('.action-list .aside-filter__item-content-box').on('click', function () {
        $(this).css('background-color', '#1C62CD');
        $(this).css('color', 'white');
        $(this).siblings().css('background-color', '#F0F0F4');
        $(this).siblings().css('color', '#C4C4C4');

    })

    //подключение ionRangeSlider
    $(".js-range-slider").ionRangeSlider();

    $(function () {

        $("#rateYo").rateYo({
            ratedFill: '#1C62CD',
            maxValue: 5,
            numStars: 5,
            spacing: "7px"
        });

    });

    //hamburger-button and mobile-menu
    const menu = document.querySelector('.mobile__menu');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay_menu');
    const button = document.querySelector('.hamburger-menu');

    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('active');
        menu.classList.toggle('active');
        body.classList.toggle('noscroll');
        overlay.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        menu.classList.remove('active');
        button.classList.remove('active');
        body.classList.remove('noscroll');
        overlay.classList.remove('active');
    });

    //footer accordion
    $('.footer__top-title').on('click', function () {
            $('.footer__top-item').removeClass('footer__top-item--active');
            $(this).parent().addClass('footer__top-item--active');
        }
    )

});
