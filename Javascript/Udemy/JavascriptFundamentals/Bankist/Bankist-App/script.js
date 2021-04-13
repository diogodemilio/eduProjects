"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // OLD Data
// const account1 = {
// 	owner: "Jonas Schmedtmann",
// 	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
// 	interestRate: 1.2, // %
// 	pin: 1111,

// 	movementsDates: [
// 		"2019-11-18T21:31:17.178Z",
// 		"2019-12-23T07:42:02.383Z",
// 		"2020-01-28T09:15:04.904Z",
// 		"2020-04-01T10:17:24.185Z",
// 		"2020-05-08T14:11:59.604Z",
// 		"2020-05-27T17:01:17.194Z",
// 		"2020-07-11T23:36:17.929Z",
// 		"2020-07-12T10:51:36.790Z",
// 	],
// 	currency: "EUR",
// 	locale: "pt-PT", // de-DE
// };

// const account2 = {
// 	owner: "Jessica Davis",
// 	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
// 	interestRate: 1.5,
// 	pin: 2222,

// 	movementsDates: [
// 		"2019-11-01T13:15:33.035Z",
// 		"2019-11-30T09:48:16.867Z",
// 		"2019-12-25T06:04:23.907Z",
// 		"2020-01-25T14:18:46.235Z",
// 		"2020-02-05T16:33:06.386Z",
// 		"2020-04-10T14:43:26.374Z",
// 		"2020-06-25T18:49:59.371Z",
// 		"2020-07-26T12:01:20.894Z",
// 	],
// 	currency: "USD",
// 	locale: "en-US",
// };

// const accounts = [account1, account2];

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

class Account {
	// Public fields
	locale = navigator.language;
	username;

	// Private fields
	#movements;
	#pin;

	constructor(owner, currency, pin, interestRate, movements, movementsDates) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
		this.#movements = movements;
		this.interestRate = interestRate;
		this.movementsDates = movementsDates;
	}

	pinCheck(pin) {
		if (this.#pin === pin) return this;
		// Chaining feature
		else return undefined;
	}

	deposit(value) {
		this.#movements.push(value);
		return this; // Chaining feature
	}

	withdraw(value) {
		this.#movements.push(-value);
		return this; // Chaining feature
	}

	requestLoan(value) {
		const loanPermission = currentAccount.#movements.some(
			(movement) => movement >= value * 0.1
		);

		if (loanPermission) {
			this.deposit(value);
			return this; // Chaining feature
		} else alert("We're not able to lend you money. Go to work!");
	}

	calculateDisplayBalance() {
		this.balance = this.#movements.reduce(
			(accumulator, movement) => accumulator + movement,
			0
		);
		labelBalance.textContent = `${this.balance.toFixed(2)} € (EUR)`;
	}

	displayMovements(sort = false) {
		containerMovements.innerHTML = "";

		const orderedMovements = sort
			? this.#movements.slice().sort((a, b) => a - b)
			: this.#movements;

		orderedMovements.forEach(function (movement, index) {
			const type = movement > 0 ? "deposit" : "withdrawal";

			const htmlMovement = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
				index + 1
			} ${type}</div>
        <div class="movements__value">${Math.abs(movement).toFixed(2)} €</div>
      </div>
    `;

			containerMovements.insertAdjacentHTML("afterbegin", htmlMovement);
		});
	}

	calculateDisplayBalance() {
		this.balance = this.#movements.reduce(
			(accumulator, movement) => accumulator + movement,
			0
		);
		labelBalance.textContent = `${this.balance.toFixed(2)} € (EUR)`;
	}

	calculateDisplaySummary() {
		const incomes = this.#movements
			.filter((movement) => movement > 0)
			.reduce((accumulator, movement) => accumulator + movement, 0);

		labelSumIn.textContent = `${incomes.toFixed(2)}€`;

		const withdrawals = this.#movements
			.filter((movement) => movement < 0)
			.reduce((accumulator, movement) => accumulator + Math.abs(movement), 0);

		labelSumOut.textContent = `${withdrawals.toFixed(2)}€`;

		const interest = this.#movements
			.filter((movement) => movement > 0)
			.map((deposit) => (deposit * 1.2) / 100)
			.filter((interest, index, array) => interest >= 1)
			.reduce((accumulator, movement) => accumulator + movement, 0);

		labelSumInterest.textContent = `${interest.toFixed(2)}€`;
	}

	createUsername() {
		this.username = this.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	}

	refreshMovements = function (account) {
		this.displayMovements();
		this.calculateDisplayBalance();
		this.calculateDisplaySummary();
	};
}

const eurCurrency = "EUR";
const usdCurrency = "USD";

const accounts = [
	new Account(
		"Jonas Schmedtmann",
		eurCurrency,
		1111,
		1.2,
		[200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
		[
			"2019-11-18T21:31:17.178Z",
			"2019-12-23T07:42:02.383Z",
			"2020-01-28T09:15:04.904Z",
			"2020-04-01T10:17:24.185Z",
			"2020-05-08T14:11:59.604Z",
			"2020-05-27T17:01:17.194Z",
			"2020-07-11T23:36:17.929Z",
			"2020-07-12T10:51:36.790Z",
		]
	),
	new Account(
		"Jessica Davis",
		usdCurrency,
		2222,
		1.5,
		[5000, 3400, -150, -790, -3210, -1000, 8500, -30],
		[
			"2019-11-01T13:15:33.035Z",
			"2019-11-30T09:48:16.867Z",
			"2019-12-25T06:04:23.907Z",
			"2020-01-25T14:18:46.235Z",
			"2020-02-05T16:33:06.386Z",
			"2020-04-10T14:43:26.374Z",
			"2020-06-25T18:49:59.371Z",
			"2020-07-26T12:01:20.894Z",
		]
	),
];

//HTML Elements

//calculateDisplaySummary(account1.movements);

let currentAccount;
accounts.forEach((account) => {
	account.createUsername();
	// console.log(account.username);
});

// Event handlers

btnLogin.addEventListener("click", function (event) {
	event.preventDefault();

	currentAccount = accounts.find(
		(account) => account.username === inputLoginUsername.value
	);

	if (currentAccount) {
		if (currentAccount.pinCheck(Number(inputLoginPin.value))) {
			labelWelcome.textContent = `Welcome Back, ${
				currentAccount.owner.split(" ")[0]
			}`;

			containerApp.style.opacity = 100;
			inputLoginPin.value = "";
			const presentDay = new Date();
			labelDate.textContent = `${`${presentDay.getDate()}`.padStart(2, 0)}/${`${
				presentDay.getMonth() + 1
			}`.padStart(2, 0)}/${presentDay.getFullYear()}`;

			currentAccount.refreshMovements();
			console.log(currentAccount);
		}
	} else alert("User does not exist/Password is not correct!");
});

btnTransfer.addEventListener("click", function (event) {
	event.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAccount = accounts.find(
		(account) => account.username === inputTransferTo.value
	);

	// console.log(receiverAccount);
	// console.log(receiverAccount?.username !== currentAccount.username);
	// console.log(inputTransferTo.value);

	if (receiverAccount) {
		if (currentAccount.balance >= amount && amount > 0) {
			if (receiverAccount?.username !== currentAccount.username) {
				// currentAccount.movements.push(-amount); //
				// receiverAccount.movements.push(amount);
				currentAccount.withdraw(amount);
				receiverAccount.deposit(amount);
				currentAccount.refreshMovements();
			} else alert("Wrong transfer username");
		} else alert("Something wrong with your money/transfer");
	} else alert("Something wrong with receiver's account");

	inputTransferAmount.value = "";
	inputTransferTo.value = "";
});

btnLoan.addEventListener("click", function (event) {
	event.preventDefault();

	const loan =
		Math.floor(inputLoanAmount.value) > 0
			? Math.floor(inputLoanAmount.value)
			: undefined;

	currentAccount.requestLoan(loan);
	currentAccount.refreshMovements();
	inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (event) {
	event.preventDefault();

	if (inputCloseUsername.value) {
		if (inputCloseUsername.value === currentAccount.username) {
			if (currentAccount.pinCheck(Number(inputClosePin.value))) {
				accounts.splice(
					accounts.findIndex(
						(account) => account.username === currentAccount.username
					),
					1
				);
				labelWelcome.textContent = "Log in to get started";
				containerApp.style.opacity = 0;
			} else alert("Password is not correct!");
		} else alert("Username is not correct!");
	}

	inputTransferAmount.value = "";
	inputTransferTo.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (event) {
	event.preventDefault();

	currentAccount.displayMovements(!sorted);
	sorted = !sorted;

	// if (btnSort.textContent == "&downarrow; SORT") {

	// 	btnSort.textContent = "&uparrow; SORT";
	// } else if (btnSort.textContent == "&uparrow; SORT") {

	// 	btnSort.textContent = "&downarrow; SORT";
	// }
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
