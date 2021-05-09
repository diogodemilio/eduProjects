import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./componentsCSS/ExpenseItem.css";

export default function ExpenseItem(props) {
	return (
		<li className="expense-item">
			<ExpenseDate expenseDate={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount} €</div>
			</div>
		</li>
	);
}
