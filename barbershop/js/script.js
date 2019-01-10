var link =document.querySelector(".login");
var popup=document.querySelector(".modal-content");

var showmap=document.querySelector(".show-map");
var map=document.querySelector(".modal-content-map");



var close=document.querySelector(".modal-content-close");
var form=popup.querySelector(".login-form");
var login=popup.querySelector("[name=login]");
var password=popup.querySelector("[name=password]");
var storage=localStorage.getItem("login");

link.addEventListener("click", function(event){

	event.preventDefault();
	popup.classList.toggle("modal-content-show");

}
);

close.addEventListener("click",function(event){
event.preventDefault();
popup.classList.remove("modal-content-show");
});


showmap.addEventListener("click",function(event)
{
	event.preventDefault();
	map.classList.add("modal-content-show");

}
);



close.addEventListener("click",function(event){
	event.preventDefault();
	map.classList.remove("modal-content-show");
	});
	






form.addEventListener("submit",function(event){
	if(!login.value || !password.value){ 
	event.preventDefault();
		console.log("Нужно ввести логин и пароль ");
if (storage){
	login.value=storage;
	password.focus();
}
else{
	login.focus();
}
	}

});
window.addEventListener("keydown",function(event){
if (event.keyCode ===27){
popup.classList.remove("modal-content-show");
}
}
);