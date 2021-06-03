import React from "react";
import CSS from "./Button.module.css";

export default function Button(props) {
	return (
		<button
			className={CSS.button}
			type={props.type || "button"}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
