import React, { useState } from "react";
import "../componentsCSS/ExpenseForm.css";

export default function ExpenseForm(props) {
	// const [title, setTitle] = useState("");
	// const [amount, setAmount] = useState("");
	// const [date, setDate] = useState("");
	// const [expense, setExpense] = useState("");
	const [userInput, setUserInput] = useState({
		stateTitle: "",
		stateAmount: "",
		stateDate: "",
		//stateExpense: "",
	});

	const titleChangeHandler = function (event) {
		setUserInput({
			...userInput,
			stateTitle: event.target.value,
		});
		console.log(event.target.value);
	};

	const amountChangeHandler = function (event) {
		setUserInput({
			...userInput,
			stateAmount: event.target.value,
		});
	};

	const dateChangeHandler = function (event) {
		setUserInput({
			...userInput,
			stateDate: event.target.value,
		});
	};

	const expenseChangeHandler = function (event) {
		setUserInput({
			...userInput,
			stateExpense: event.target.value,
		});
	};

	const submitHandler = function (event) {
		event.preventDefault();

		const expenseData = {
			title: userInput.stateTitle,
			amount: Number(userInput.stateAmount),
			date: new Date(userInput.stateDate),
		};
		console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setUserInput({
			stateTitle: "",
			stateAmount: "",
			stateDate: "",
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						onChange={titleChangeHandler}
						value={userInput.stateTitle}
						type="text"
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						onChange={amountChangeHandler}
						value={userInput.stateAmount}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						onChange={dateChangeHandler}
						value={userInput.stateDate}
						type="date"
						min="2021-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancelData} type="button">
					Cancel
				</button>
				<button onChange={expenseChangeHandler} type="submit">
					Add Expense
				</button>
			</div>
		</form>
	);
}
