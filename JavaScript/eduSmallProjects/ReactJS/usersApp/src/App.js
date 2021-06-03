import React, { useState } from "react";
import { AddUser, UsersList } from "./components/users/indexUsers";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = function (uName, uAge) {
		setUsersList((previousUsersList) => {
			return [
				...previousUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
