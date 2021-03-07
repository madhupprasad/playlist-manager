import { firebase } from "@firebase/app";
import { firebaseConfig } from "../config/config";
import { setSessionCookie } from "./sessions";

var firebaseui = require("firebaseui");
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export const startFirebaseUI = () =>
	ui.start("#firebaseui-auth-container", {
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				const email = authResult.user.email;
				setSessionCookie({ email });
				return true;
			},
			uiShown: function () {
				document.getElementById("loader").style.display = "none";
			},
		},
		signInFlow: "popup",
		signInSuccessUrl: "/landing",
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
	});
