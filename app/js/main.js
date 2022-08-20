$(function () {

  $(".menu a,.hero__link,.logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });


  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="slick-btn__arrow"><use xlink: href = "images/sprite.svg#left-slider"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="slick-btn__arrow"><use xlink: href = "images/sprite.svg#right-slider"></use></svg ></button>',
    dots: true,
    fade: true,
  });

  var mixer = mixitup('.categories__box-card');

});