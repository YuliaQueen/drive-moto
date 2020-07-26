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

    //slick-slider для products-section
    // $('.product-slider').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./img/arrow-black-left.svg" alt=""></button>',
    //     nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./img/arrow-black-right.svg" alt=""></button>',
    // });

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
});
