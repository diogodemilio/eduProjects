import React from "react";
import ExpenseForm from "./ExpenseForm";

import "../componentsCSS/NewExpense.css";

export default function NewExpense(props) {
	const saveExpenseDataHandler = function (expenseData) {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expense);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}
