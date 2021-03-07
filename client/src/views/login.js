import React, { useContext, useEffect } from "react";
import { startFirebaseUI } from "../components/firebase.js";
import { SessionContext } from "../components/sessions";

export const Login = () => {
	const session = useContext(SessionContext);
	useEffect(() => {
		if (!session.email) {
			startFirebaseUI();
		}
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Welcome to My Awesome App</h1>
			<div id="firebaseui-auth-container"></div>
			<div id="loader">Loading...</div>
		</div>
	);
};
