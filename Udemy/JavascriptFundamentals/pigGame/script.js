"use strict";

const initialScore = 0;
let currentScore = 0;
let player1 = true;
let _scorePlayer1 = 0;
let _scorePlayer2 = 0;
const dice = document.querySelector(".dice");

let scorePlayer1 = document.getElementById("score--0");
scorePlayer1.textContent = initialScore;

let currentScorePlayer1 = document.getElementById("current--0");

let scorePlayer2 = document.getElementById("score--1");
scorePlayer2.textContent = initialScore;

let currentScorePlayer2 = document.getElementById("current--1");

dice.classList.add("hidden");

const playerActive = (player) => {
	if (player) {
		document.querySelector(".player--1").classList.remove("player--active");
		document.querySelector(".player--0").classList.add("player--active");
	} else {
		document.querySelector(".player--0").classList.remove("player--active");
		document.querySelector(".player--1").classList.add("player--active");
	}
};

document.querySelector(".btn--roll").addEventListener("click", function () {
	const diceRoll = Math.trunc(Math.random() * 6) + 1;
	dice.classList.remove("hidden");
	dice.src = `./dice/dice-${diceRoll}.png`;

	if (diceRoll !== 1) {
		currentScore += diceRoll;
		if (player1) {
			currentScorePlayer1.textContent = currentScore;
		} else {
			currentScorePlayer2.textContent = currentScore;
		}
	} else {
		currentScore = 0;
		if (player1) {
			player1 = false;
			currentScorePlayer1.textContent = currentScore;
			playerActive(player1);
		} else {
			player1 = true;
			currentScorePlayer2.textContent = currentScore;
			playerActive(player1);
		}
	}
});
document.querySelector(".btn--hold").addEventListener("click", function () {
	if (player1) {
		_scorePlayer1 += currentScore;
		scorePlayer1.textContent = _scorePlayer1;
		currentScorePlayer1.textContent = initialScore;
		player1 = false;
		playerActive(player1);
	} else {
		_scorePlayer2 += currentScore;
		scorePlayer2.textContent = _scorePlayer2;
		currentScorePlayer2.textContent = initialScore;
		player1 = true;
		playerActive(player1);
	}
	currentScore = 0;
	dice.classList.add("hidden");
});

document.querySelector(".btn--new").addEventListener("click", function () {
	dice.classList.add("hidden");
	currentScorePlayer1.textContent = initialScore;
	currentScorePlayer2.textContent = initialScore;
	scorePlayer1.textContent = initialScore;
	scorePlayer2.textContent = initialScore;
	_scorePlayer1 = initialScore;
	_scorePlayer2 = initialScore;
	currentScore = initialScore;
	playerActive(true);
});
