$( document ).ready(function() {
   // $(".page-services__block__item__header").addclass("padding");
});

$(".page-services__block__item").find(".page-services__block__item__header__dropdown1").on("click",function(e){
e.preventDefault();
$(this).toggleClass("showicon");
$(".page-services__block__item").find(".page-services__block__item__body1").toggleClass("show");
$(".page-services__block__item__header1").toggleClass("addpadding");
});
$(".page-services__block__item").find(".page-services__block__item__header__dropdown2").on("click",function(e){
  e.preventDefault();
  $(this).toggleClass("showicon");
  $(".page-services__block__item").find(".page-services__block__item__body2").toggleClass("show");
  $(".page-services__block__item__header2").toggleClass("addpadding");
  });
  $(".page-services__block__item").find(".page-services__block__item__header__dropdown3").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("showicon");
    $(".page-services__block__item").find(".page-services__block__item__body3").toggleClass("show");
    $(".page-services__block__item__header3").toggleClass("addpadding");
    });
    $(".page-services__block__item").find(".page-services__block__item__header__dropdown4").on("click",function(e){
      e.preventDefault();
      $(this).toggleClass("showicon");
      $(".page-services__block__item").find(".page-services__block__item__body4").toggleClass("show");
      $(".page-services__block__item__header4").toggleClass("addpadding");
      });
      
      $(".page-services__block__item").find(".page-services__block__item__header__dropdown5").on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("showicon");
        $(".page-services__block__item").find(".page-services__block__item__body5").toggleClass("show");
        $(".page-services__block__item__header5").toggleClass("addpadding");
        });
        

$(".page-team__block").slick({
    autoplay: true,
    arrows:false,
    infinite: true,
    adaptiveHeight:true,

  });

$(".page-header__navigation__menu").on("click",function(e){
e.preventDefault();
$(this).toggleClass("menu-active");
$(".page-header__navigation__links").toggleClass("showmenu");
$(".page-header__navigation__signup").toggleClass("showmenu");
});