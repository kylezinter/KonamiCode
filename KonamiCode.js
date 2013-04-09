var KONAMIATTEMPT = "";
var THECODE = "38384040373937396665";

$(document).ready(function() {
	$(document).on("keydown", function(){
		//Save keycode of button press as string
		var keycode = "" + (event.keyCode ? event.keyCode : event.which);
		//Call konamiCode function to check
		konamiCode(keycode);
	});
}

function konamiCode(keycode) {
	//Add this key press to variable to track presses
	KONAMIATTEMPT += keycode;

	//If the attempt grows more than 10 key presses, remove the first in the list
	if(KONAMIATTEMPT.length == 22)
	{
		KONAMIATTEMPT = KONAMIATTEMPT.slice(2);
	};

	//See if attempt matches the Konami Code
	if (THECODE == KONAMIATTEMPT)
	{
		//Do your whatever you'd like to do here once the user has successfully entered the Konami Code
		alert("The konami code hit!");
	};
}