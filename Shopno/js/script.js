$(".page-header__menu__block__hamburger").on("click",function(e){
 e.preventDefault;
 e.stopPropagation();
$(this).toggleClass("page-header__menu__block__hamburger__active");
$(".page-header__menu__block__item").toggleClass("page-header__menu__block__item__active");
});


$(".page-team__block__item").mouseenter(function(){
 
  $(this).find(".page-team__block__item__hover").toggleClass("page-header__menu__block__item__active");
});

$(".page-team__block__item").mouseleave(function(){
  $(this).find(".page-team__block__item__hover").toggleClass("page-header__menu__block__item__active");

});

$(".page-services__block__item__open").one("click",function(e){
  e.preventDefault;
  e.stopPropagation();
  $(this).find(".page-services__block__item").toggleClass("page-services__block__item__open__active");
})


$(document).ready(function(){
  $(".page-about__block__item__slider").slick({
    dots:true,
    autoplay: true,
    autoplaySpeed:5000,
    arrows:false,
    infinite:false,
  });
});


$(document).ready(function(){
  $(".page-says__block__slider").slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    infinite:false,
  });
});
