import "./componentsCSS/Expenses.css";
import ExpenseItem from "./ExpenseItem";

import React from "react";

export default function Expenses(props) {
	return (
		<div className="expenses">
			<ExpenseItem
				expenseDate={props.expenses[0].date}
				expenseTitle={props.expenses[0].title}
				expenseAmount={props.expenses[0].amount}
			/>
		</div>
	);
}
