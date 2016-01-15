userResponse = prompt("Would you like to play a game?").toLowerCase();

if (userResponse === "no" || userResponse === "n") {
	window.location = "../HTML/sorry.html";
}
else if (userResponse === "yes" || userResponse === "y"){
	window.location = "../HTML/gamesandapps.html";
}
else {
	window.location = "../HTML/worthy.html";
}