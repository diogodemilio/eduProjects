import React from "react";
import CSS from "./Card.module.css";

export default function Card(props) {
	return (
		<div className={`${CSS.card} ${props.className}`}>{props.children}</div>
	);
}
