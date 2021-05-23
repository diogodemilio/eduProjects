import React from "react";
import ReactDOM from "react-dom";

import { Card, Button } from "./indexUI";
import CSS from "./ErrorModal.module.css";

const Backdrop = function (props) {
	return <div className={CSS.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = function (props) {
	return (
		<Card className={CSS.modal}>
			<header className={CSS.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={CSS.content}>
				<p>{props.message}</p>
			</div>
			<footer className={CSS.actions}>
				<Button onClick={props.clearError}>Okay</Button>
			</footer>
		</Card>
	);
};

export default function ErrorModal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.clearError} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					clearError={props.clearError}
				/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
}
