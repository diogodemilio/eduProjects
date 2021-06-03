import React, { useState, useRef } from "react";
import { Card, Button, ErrorModal } from "../UI/indexUI";

import CSS from "./AddUser.module.css";

export default function AddUser(props) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = function (event) {
		event.preventDefault();
		const inputUser = nameInputRef.current.value;
		const inputAge = ageInputRef.current.value;

		if (inputUser.trim().length === 0 || inputAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age",
			});
			return;
		}
		if (+inputAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}

		props.onAddUser(inputUser, inputAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorClearHandler = function () {
		setError();
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					clearError={errorClearHandler}
				/>
			)}
			<Card className={CSS.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button
						type={"submit"}
						//onclick={onClickHandler}
						children={"Add User"}
					/>
				</form>
			</Card>
		</>
	);
}
