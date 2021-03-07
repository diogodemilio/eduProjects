"use strict";

/* console.log(document.querySelector(".message"));
document.querySelector(".message ").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 13; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore;

document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
	const playerNumber = Number(document.querySelector(".guess").value);

	if (score > 0) {
		if (!playerNumber) {
			document.querySelector(".message").textContent = "No number!";
		} else if (playerNumber === secretNumber) {
			document.querySelector("body").style.backgroundColor = "#60b347";

			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
			document.querySelector(".message").textContent = "Correct Number!";
			document.querySelector(".number").textContent = secretNumber;
		} else if (playerNumber > secretNumber) {
			document.querySelector(".message").textContent = "Too High!";
			score -= 1;
			document.querySelector(".score").textContent = score;
		} else if (playerNumber < secretNumber) {
			document.querySelector(".message").textContent = "Too Low!";
			score -= 1;
			document.querySelector(".score").textContent = score;
		}
	} else {
		document.querySelector(".message").textContent = "You lost the game!";
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = " ";
	if (!highScore) {
		highScore = 0;
	}
	document.querySelector(".highscore").textContent = highScore;
});
