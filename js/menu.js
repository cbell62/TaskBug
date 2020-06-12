// JavaScript Document
var isNavHidden = true;
var isSubMenuHidden = true;

function openCloseNav() {
	//Dynamically display the extended sidenav
	if(isNavHidden){
		document.getElementsByClassName("sidenav-extended")[0].style.display = "block";
		document.getElementById("mainMenu").style.backgroundColor = "#B87668";
		isNavHidden = false;
	} else {
		document.getElementsByClassName("sidenav-extended")[0].style.display = "none";
		document.getElementById("mainMenu").style.backgroundColor = "#8D4F42";
		isNavHidden =  true;
	}
}

function openCloseSubMenu() {
	//Dynamically display the submenu under Manage Tasks
	if(isSubMenuHidden){
		document.getElementById("submenu").style.display = "block";
		document.getElementById("up-arrow").src = "assets/Down-arrow-small.png"
		isSubMenuHidden = false;
	} else {
		document.getElementById("submenu").style.display = "none";
		document.getElementById("up-arrow").src = "assets/Forward-arrow-small.png"
		isSubMenuHidden = true;
	}
}