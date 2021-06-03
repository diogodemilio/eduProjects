import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Tissue",
		amount: 94,
		date: new Date(2020, 9, 14),
	},
	{
		id: "e3",
		title: "Paper",
		amount: 4,
		date: new Date(2019, 7, 14),
	},
];

export default function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = function (expense) {
		setExpenses((previousExpenses) => {
			return [expense, ...previousExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}
