var Konami = (function() {
	//privates
	var KONAMIATTEMPT = "";
	var THECODE = "38384040373937396665";
	var konamiCode, bindEvents;

	konamiCode = function(keycode) {
		//Add this key press to variable to track presses
		KONAMIATTEMPT += keycode;

		//If the attempt grows more than 10 key presses, remove the first in the list
		if(KONAMIATTEMPT.length === 22)
		{
			KONAMIATTEMPT = KONAMIATTEMPT.slice(2);
		}

		//See if attempt matches the Konami Code
		if (THECODE === KONAMIATTEMPT)
		{
			//Do your whatever you'd like to do here once the user has successfully entered the Konami Code
			alert("The konami code hit!");
		}
	};

	bindEvents = function() {
		function keyDown(e) {
			//Save keycode of button press as string
			var keycode = "" + (e.keyCode ? e.keyCode : e.which);
			//Call konamiCode function to check
			konamiCode(keycode);
		}

		document.addEventListener("keydown", keyDown, false);
	};

	//obj to set to Konami module
	var obj = {
		init: function() {
			bindEvents();
		}
	};

	return obj;
})();

Konami.init();