import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase } from "@firebase/app";
import { firebaseConfig } from "./config/config";
import { SessionContext, setSessionCookie } from "./components/sessions";
var firebaseui = require("firebaseui");

firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const App = () => {
	const history = useHistory();
	const session = React.useContext(SessionContext);

	const stateupdate = (email) => {
		setSessionCookie({ email });
		console.log("Called");
		history.push("/landing");
	};

	useEffect(() => {
		console.log(session);
		if (!session.email) {
			ui.start("#firebaseui-auth-container", {
				callbacks: {
					signInSuccessWithAuthResult: function (
						authResult,
						redirectUrl
					) {
						stateupdate(authResult.user.email);
						return false;
					},
					uiShown: function () {
						document.getElementById("loader").style.display =
							"none";
					},
				},
				signInFlow: "popup",
				signInSuccessUrl: "/landing",
				signInOptions: [
					firebase.auth.EmailAuthProvider.PROVIDER_ID,
					firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				],
			});
		} else {
			history.push("/landing");
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

export default App;
