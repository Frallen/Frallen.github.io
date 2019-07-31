
$(document).ready(function(){
    $('.page-header-slider__block').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows:true,
        adaptiveHeight: true,
    });
  });


  $(document).ready(function(){
    $('.page-review__block').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        arrows:false,
    });
  });



  $(".page-team__block__item").mouseenter("click",function(){
      $(this).find(".page-team__block__item__info").toggleClass("show");

  });


  $(".header-page__button").on("click",function(e){
    e.preventDefault;
    $(this).toggleClass("header-page__button__actvie");
    $(".header-page__menu").toggleClass("header-page__menu__active");
  });