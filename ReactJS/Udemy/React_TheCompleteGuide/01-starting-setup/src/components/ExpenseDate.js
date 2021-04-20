import React from "react";
import "./componentsCSS/ExpenseDate.css";

export default function ExpenseDate(props) {
	const month = props.expenseDate.toLocaleString("pt-PT", { month: "long" });
	const day = props.expenseDate.toLocaleString("pt-PT", { day: "2-digit" });
	const year = props.expenseDate.getFullYear();

	return (
		<div>
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__day">{day}</div>
			<div className="expense-date__year">{year}</div>
		</div>
	);
}
