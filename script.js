// Setting DOM circles into variables.
var circle1 = document.getElementsByClassName("circle-1");
var circle2 = document.getElementsByClassName("circle-2");
var circle3 = document.getElementById("transparent");

// Assigning text tags to variables.
var p1 = document.getElementById("para-1");
var p2 = document.getElementById("para-2");

// Assigning button tag to a variable.
var button = document.getElementsByTagName("button");

// Function for the intersection (triggered by html button).
function intersect() {
	// Moving the circles towards each other.
	circle1[0].style.marginLeft = "25%";
	circle3.style.marginLeft    = "25%";
	circle2[0].style.marginRight= "25%";
	
	// Removing one para element.
	p2.remove();
	
	// Changing text on the first para.
	p1.innerHTML = "Intersection";
	p1.style.paddingLeft = "5%";
	
	// Hiding the button as instructed.
	button[0].style.display = "none";
}