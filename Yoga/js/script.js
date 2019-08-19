$(".page-header__menu__hamburger").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("page-header__menu__hamburger__active");
    $(".page-header__menu__links").toggleClass("showmenu");
})