import React from "react";
import Card from "../UI/Card";

import CSS from "./UsersList.module.css";

export default function UsersList(props) {
	return (
		<Card className={CSS.users}>
			<ul>
				{props.users.map((user) => (
					<li>user.name ({user.age} years old)</li>
				))}
			</ul>
		</Card>
	);
}
