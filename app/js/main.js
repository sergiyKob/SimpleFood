$(function () {

  $(".menu a,.hero__link,.logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });



  var mixer = mixitup('.categories__box-card');

});