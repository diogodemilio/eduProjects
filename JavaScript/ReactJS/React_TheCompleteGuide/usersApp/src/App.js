import React from "react";
import { AddUser, UsersList } from "./components/users/indexUsers";

function App() {
	return (
		<div>
			<AddUser />
			<UsersList users={[]} />
		</div>
	);
}

export default App;
