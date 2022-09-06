$(function () {




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
    
  });

//----------------------------------------------------------------------//

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

    dotsClass: 'class=" slick-dots popup__slick-dots',

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

  $('.select-style, .product__number').styler();

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