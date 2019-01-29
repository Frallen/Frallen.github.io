var send=document.querySelector(".send");
var popup=document.querySelector(".modal-content");
var close=document.querySelector(".close");
send.addEventListener("click", function(event)
{
    event.preventDefault();
    popup.classList.add("modal-content-show");

});

close.addEventListener("click", function(event)
{
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});