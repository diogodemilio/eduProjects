import React, { useState } from "react";
import { Card, Button } from "../UI/indexUI";

import CSS from "./AddUser.module.css";

export default function AddUser(props) {
	const [user, setUser] = useState({
		username: "",
		age: "",
	});
	const addUserHandler = function (event) {
		event.preventDefault();
		if (user.username.trim().length === 0 || user.age.trim().length === 0)
			return;
		if (+user.age < 1) return;
		console.log(user);
		setUser({
			username: "",
			age: "",
		});
	};

	const usernameChangeHandler = function (event) {
		setUser((previousState) => {
			return {
				...previousState,
				username: event.target.value,
			};
		});
	};

	const ageChangeHandler = function (event) {
		setUser((previousState) => {
			return {
				...previousState,
				age: event.target.value,
			};
		});
	};

	return (
		<Card className={CSS.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					value={user.username}
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age</label>
				<input
					id="age"
					type="number"
					value={user.age}
					onChange={ageChangeHandler}
				/>
				<Button
					type={"submit"}
					//onclick={onClickHandler}
					children={"Add User"}
				/>
			</form>
		</Card>
	);
}
