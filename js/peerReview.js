// JavaScript Document
function myFunction(element) {
	if(element.id == "1") {
		document.getElementById("1").src = "assets/SelectedStar.png";
		document.getElementById("2").src = "assets/DeselectedStar.png";
		document.getElementById("3").src = "assets/DeselectedStar.png";
		document.getElementById("4").src = "assets/DeselectedStar.png";
		document.getElementById("5").src = "assets/DeselectedStar.png";
	}
	else if(element.id == "2"){
		document.getElementById("1").src = "assets/SelectedStar.png";
		document.getElementById("2").src = "assets/SelectedStar.png";
		document.getElementById("3").src = "assets/DeselectedStar.png";
		document.getElementById("4").src = "assets/DeselectedStar.png";
		document.getElementById("5").src = "assets/DeselectedStar.png";
	}
	else if(element.id == "3"){
		document.getElementById("1").src = "assets/SelectedStar.png";
		document.getElementById("2").src = "assets/SelectedStar.png";
		document.getElementById("3").src = "assets/SelectedStar.png";
		document.getElementById("4").src = "assets/DeselectedStar.png";
		document.getElementById("5").src = "assets/DeselectedStar.png";
	}
	else if(element.id == "4"){
		document.getElementById("1").src = "assets/SelectedStar.png";
		document.getElementById("2").src = "assets/SelectedStar.png";
		document.getElementById("3").src = "assets/SelectedStar.png";
		document.getElementById("4").src = "assets/SelectedStar.png";
		document.getElementById("5").src = "assets/DeselectedStar.png";
	}
	else if(element.id == "5"){
		document.getElementById("1").src = "assets/SelectedStar.png";
		document.getElementById("2").src = "assets/SelectedStar.png";
		document.getElementById("3").src = "assets/SelectedStar.png";
		document.getElementById("4").src = "assets/SelectedStar.png";
		document.getElementById("5").src = "assets/SelectedStar.png";
	}
}