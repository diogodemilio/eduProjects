import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
	const expenses = [
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

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
