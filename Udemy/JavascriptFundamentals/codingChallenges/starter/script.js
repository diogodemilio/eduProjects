"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//HTML Elements

const displayMovements = function (movements) {
	containerMovements.innerHTML = "";

	movements.forEach(function (movement, index) {
		const type = movement > 0 ? "deposit" : "withdrawal";

		const htmlMovement = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
			index + 1
		} ${type}</div>
        <div class="movements__value">${Math.abs(movement)} €</div>
      </div>
    `;

		containerMovements.insertAdjacentHTML("afterbegin", htmlMovement);
	});
};

const calculateDisplayBalance = function (movements) {
	const balance = movements.reduce(
		(accumulator, movement) => accumulator + movement,
		0
	);
	labelBalance.textContent = `${balance} € (EUR)`;
};

calculateDisplayBalance(account1.movements);

const calculateDisplaySummary = function (movements) {
	const incomes = movements
		.filter((movement) => movement > 0)
		.reduce((accumulator, movement) => accumulator + movement, 0);

	labelSumIn.textContent = `${incomes}€`;

	const withdrawals = movements
		.filter((movement) => movement < 0)
		.reduce((accumulator, movement) => accumulator + Math.abs(movement), 0);

	labelSumOut.textContent = `${withdrawals}€`;

	const interest = movements
		.filter((movement) => movement > 0)
		.map((deposit) => (deposit * 1.2) / 100)
		.filter((interest, index, array) => interest >= 1)
		.reduce((accumulator, movement) => accumulator + movement, 0);

	labelSumInterest.textContent = `${interest}€`;
};

calculateDisplaySummary(account1.movements);

const createUsernames = function (accounts) {
	accounts.forEach(function (account) {
		account.username = account.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};

createUsernames(accounts);

let currentAccount;

btnLogin.addEventListener("click", function (event) {
	event.preventDefault();

	currentAccount = accounts.find(
		(account) => account.username === inputLoginUsername.value
	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		labelWelcome.textContent = `Welcome Back, ${
			currentAccount.owner.split(" ")[0]
		}`;

		containerApp.style.opacity = 100;

		displayMovements(currentAccount.movements);
		calculateDisplayBalance(currentAccount.movements);
		calculateDisplaySummary(currentAccount.movements);
		console.log(currentAccount);
	}
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const maximumValue = movements.reduce((accumulator, movement) => {
// 	if (accumulator > movement) return accumulator;
// 	else return movement;
// }, movements[0]);

// console.log(maximumValue);
