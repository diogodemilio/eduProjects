import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export default AuthContext;

export const AuthContextProvider = function (props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUseLoggerInformation = localStorage.getItem("isLoggedIn");
		if (storedUseLoggerInformation === "1") setIsLoggedIn(true);
	}, []);

	const logoutHandler = function () {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	const loginHandler = function () {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
