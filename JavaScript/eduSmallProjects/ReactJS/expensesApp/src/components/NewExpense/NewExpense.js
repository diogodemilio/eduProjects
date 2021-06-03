import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "../componentsCSS/NewExpense.css";

export default function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = function (expenseData) {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expense);
		setIsEditing(false);
	};

	const startEditingHandler = function () {
		setIsEditing(true);
	};

	const stopEditingHandler = function () {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add new Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelData={stopEditingHandler}
				/>
			)}
		</div>
	);
}
