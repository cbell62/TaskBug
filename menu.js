// JavaScript Document
var hidden = true;

function openNav() {
	//Dynamically create the extended sidenav
	console.log(hidden);
	
	if(hidden){
		document.getElementById("extended").style.display = "block";
		hidden = false;
	}
	else{
		document.getElementById("extended").style.display = "none";
		hidden =  true;
	}
	
}