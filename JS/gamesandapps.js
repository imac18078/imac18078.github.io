userResponse = prompt("Would you like to play a game?").toLowerCase();

if (userResponse === "no" || userResponse === "n") {
	window.location = "../HTML/sorry.html";
}
else {
	window.location = "../HTML/worthy.html";
}