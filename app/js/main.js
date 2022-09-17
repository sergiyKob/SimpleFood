$(function () {


//-----------------------------------------------------------------//

  $('.product-slide__link').on('click', function () {
    $('body').addClass('lock');
  });

  $('.popup__close').on('click', function () {
    $('body').removeClass('lock');
  });


//---------------------------------------------------------------------//

  $('.select-style, .product__number').styler();

  //-----------------------------------------------------------------------//

  $('.filters-mobile').on('click', function () {
    $('.filter, .menu').addClass('active');
    $('body').addClass('lock');
  });

  $('.filter__close-btn').on('click', function () {
    $('.filter, .menu').removeClass('active');
    $('body').removeClass('lock');
  });



  //-------------Слайдер restaurants при екрані менше 576рх------------------------//

  $('.restaurants__box-card-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'class= slick-dots restaurants__slick-dots'
  });

  //-----------------------------------------------------------------------------//


  $('.promo__items-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'class= slick-dots promo__slick-dots'
  });



//--------------------------burger menu------------------------------//


  $('.burger').on('click', function () {
    $('.burger, .menu, .menu__list, .burger-close').addClass('active');
    $('body').addClass('lock');
  });

  $('.menu__list a, .burger-close').on('click', function () {
    $('.burger, .menu, .menu__list, .burger-close').removeClass('active');
    $('body').removeClass('lock');
  }); 


//-------------fixed header---------------------------------------------//


  $(window).scroll(function () {
    var menu = $('.menu');
    if ($(this).scrollTop() > 1) {
      menu.addClass('menu_fixed');
    } else {
      menu.removeClass('menu_fixed');
    }
  });


//----------------------------------------------------------------------//
  
  $('.interesting__slider').slick({
    prevArrow: '<button type="button" class="slick-btn interesting__slick-prev slick-btn--active"><svg class="slick-btn__arrow "><use xlink: href = "images/sprite.svg#left-slider"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-btn interesting__slick-next"><svg class="slick-btn__arrow "><use xlink: href = "images/sprite.svg#right-slider"></use></svg ></button>',
    // fade: true,
    dotsClass: 'class= slick-dots interesting__slick-dots',
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      }
    ]
  });

//---------------------------Tabs-------------------------------------------//

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');


    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');

  });

//----------------------------------------------------------------------//

  $('.popup__slider').slick({
    prevArrow: '<button type="button" class="popup__prev-btn"><svg class="popup__icon "><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button>',

    nextArrow: '<button type="button" class="popup__next-btn"><svg class="popup__icon "><use xlink: href = "images/sprite.svg#icon-next"></use></svg ></button>',

    dotsClass: 'class= slick-dots popup__slick-dots',

    // fade: true,
    dots: true,
  });

//----------------------------------------------------------------------//

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    fullStar: true,
  });

//----------------------------------------------------------------------//

  $('.product-slide').slick({
    prevArrow: '<button type="button" class=" slick-product__prev"><svg class="slick-product__icon "><use xlink: href = "images/sprite.svg#icon3"></use></svg></button>',

    nextArrow: '<button type="button" class=" slick-product__next"><svg class="slick-product__icon "><use xlink: href = "images/sprite.svg#icon4"></use></svg ></button>',
    // fade: true,
  });

//----------------------------------------------------------------------//



//----------------------------------------------------------------------//

  $(".menu a,.hero__link,.logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

//----------------------------------------------------------------------//

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev slick-btn--active"><svg class="slick-btn__arrow "><use xlink: href = "images/sprite.svg#left-slider"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="slick-btn__arrow "><use xlink: href = "images/sprite.svg#right-slider"></use></svg ></button>',
    dots: true,
    fade: true,
    dotsClass: 'class= slick-dots reviews__slick-dots'
    
  });


//----------------------------------------------------------------------//

  var mixer = mixitup('.categories__box-card');

  });



//----------------------------------------------------------------------//

var $range = $(".range-slider__input"),
  $inputFrom = $(".filter-price__input-from"),
  $inputTo = $(".filter-price__input-to"),
  instance,
  min = 0,
  max = 1200,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });


  
//--------------------------------------------------------------------//





















});