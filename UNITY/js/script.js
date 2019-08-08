$(".page-best-wom__block__item__product__star").on("click",function(e){
    e.preventDefault();
});
$(".page-best-men__block__item__product__star").on("click",function(e){
    e.preventDefault();
});

$(".page-best-wom__load__button").on("click",function(e){
e.preventDefault();
$(".page-best-wom__load__button").addClass("hide");
$(".page-best-wom__block__item__hide").addClass("show");
/*нажимаю на кнопку с использую класс с анимацией,при нажатии появляются элементы
и добавляется скролл в самый низ страницы */
$("html, body").animate({ scrollTop: $(document).height()}, "slow");
});

$(".page-best-men__load__button").on("click",function(e){
    e.preventDefault();
    $(".page-best-men__load__button").addClass("hide");
    $(".page-best-men__block__item__hide").addClass("show");
    /*нажимаю на кнопку с использую класс с анимацией,при нажатии появляются элементы
    и добавляется скролл в самый низ страницы */
    $("html, body").animate({ scrollTop: $(document).height()}, "slow");
    });

    $(".page-best-wom__block__item").mouseenter(function(){
        $(this).find(".page-best-wom__block__item__showitem").addClass("shopnow");
    });
    $(".page-best-wom__block__item").mouseleave(function(){
        $(this).find(".page-best-wom__block__item__showitem").removeClass("shopnow");
    });

$(".page-best-men__block__item").mouseenter(function(){
    $(this).find(".page-best-men__block__item__showitem").addClass("shopnow");
});
$(".page-best-men__block__item").mouseleave(function(){
    $(this).find(".page-best-men__block__item__showitem").removeClass("shopnow");
});

$(".page-mix__block__item").mouseenter(function(){
    $(this).find(".page-mix__block__item__choose").addClass("page-mix__block__item__choose__active");
});

$(".page-mix__block__item").mouseleave(function(){
    $(this).find(".page-mix__block__item__choose").removeClass("page-mix__block__item__choose__active");
});


$(document).ready(function(){
    $('.page-deals__block').slick({
      dots:true,
      infinity:true,
      fade: true,
      adaptiveHeight:true,
      dragable:true,
      arrows:false,
    });
  });

  $(".page-magazine__block__clotes__item").mouseenter(function(){
    $(this).find(".page-magazine__block__clotes__item__showitem").addClass("shopnow");
});
$(".page-magazine__block__clotes__item").mouseleave(function(){
    $(this).find(".page-magazine__block__clotes__item__showitem").removeClass("shopnow");
});

$(".page-magazine__block__search__item__categories__icon1").on("click",function(e){
e.preventDefault();
$(this).toggleClass("rotate-icon");
$(".page-magazine__block__search__item").find(".typeclotes").toggleClass("show-filter");

});
$(".page-magazine__block__search__item__categories__icon2").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("rotate-icon");
    $(".page-magazine__block__search__item").find(".priceclotes").toggleClass("show-filter");
    
    });

    $(".page-magazine__block__search__item__categories__icon3").on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("rotate-icon");
        $(".page-magazine__block__search__item").find(".sizeclotes").toggleClass("show-filter");
        
        });
        
    $(".page-magazine__block__search__item__categories__icon4").on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("rotate-icon");
        $(".page-magazine__block__search__item").find(".brendclotes").toggleClass("show-filter");
        
        });

        $(".page-magazine__block__search__item__categories__icon5").on("click",function(e){
            e.preventDefault();
            $(this).toggleClass("rotate-icon");
            $(".page-magazine__block__search__item").find(".colorclotes").toggleClass("show-filter");
            
            });