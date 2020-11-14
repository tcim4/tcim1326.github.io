var cl = console.log;
var body = document.body;

window.onload=function(){
	cl("DOM is loaded");
	body.textContent=window.location.pathname;
}

body.textContent+="Hello World";
