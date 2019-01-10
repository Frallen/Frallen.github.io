var link =document.querySelector(".login");
var popup=document.querySelector(".modal-content");

var showmap=document.querySelector(".show-map");
var map=document.querySelector(".modal-content-map");



var close=document.querySelector(".modal-content-close");
var form=popup.querySelector("form");
var login=popup.querySelector("[name=login]");
var password=popup.querySelector("[name=password]");
var storage=localStorage.getItem("login");

link.addEventListener("click", function(event){

	event.preventDefault();
	popup.classList.toggle("modal-content-show");

	if (storage){
		login.value=storage;
/*Если логин был уже ранее введен то строкапароля становится активной для ввода*/ 
		password.focus();
	}
	else{
		login.focus();
	}

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
	event.preventDefault();}
	else{ 
	localStorage.setItem("login",login.value);
	}

});
window.addEventListener("keydown",function(event){
if (event.keyCode ===27){
popup.classList.remove("modal-content-show");
}
}
);