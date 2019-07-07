$(".page-services__content__block__item").mouseenter(function(){

   
    $(this).find(".smartphone-black").addClass("hide");
    $(this).find(".smartphone-white").addClass("show");
    
     
});

$(".page-services__content__block__item").mouseleave(function(){

    $(".smartphone-white").removeClass("show");
    $(".smartphone-black").removeClass("hide");



});

$(document).ready(function(){
    $(".page-team__corusel").slick({
        dots: true,
  infinite: true,
  arrows:false,
    });
});


