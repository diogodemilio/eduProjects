import ExpenseDate from "./ExpenseDate";
import "./componentsCSS/ExpenseItem.css";

export default function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<ExpenseDate expenseDate={props.expenseDate} />
			<div className="expense-item__description">
				<h2>{props.expenseTitle}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
		</div>
	);
}
