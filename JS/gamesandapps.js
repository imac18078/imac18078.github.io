userResponse = prompt("Would you like to play a game?").toLowerCase();

var out = 0;

if (userResponse === "no" || userResponse === "n") {
	window.location = "../HTML/sorry.html";
}
else if (userResponse === "yes" || userResponse === "y") {
	break out;
}
else {
	window.location = "../HTML/worthy.html";
}

out;