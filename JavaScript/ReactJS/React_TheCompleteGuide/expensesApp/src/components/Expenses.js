import React, { useState } from "react";
import "./componentsCSS/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";

export default function Expenses(props) {
	const Expenses = function (props) {
		const [filteredYear, setFilteredYear] = useState("2020");
	};

	const filteredChangeHandler = function (selectedYear) {
		setFilteredYear(selectedYear);
	};

	return (
		<div className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filteredChangeHandler}
			/>
			<ExpenseItem
				expenseDate={props.expenses[0].date}
				expenseTitle={props.expenses[0].title}
				expenseAmount={props.expenses[0].amount}
			/>
		</div>
	);
}
