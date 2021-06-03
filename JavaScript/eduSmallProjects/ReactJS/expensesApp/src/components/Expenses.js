import React, { useState } from "react";
import "./componentsCSS/Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filteredChangeHandler = function (selectedYear) {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filteredChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</div>
	);
}
