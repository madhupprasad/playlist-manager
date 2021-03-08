import * as Cookies from "js-cookie";
import React from "react";

export const setSessionCookie = ({ key, value }) => {
	Cookies.remove(key);
	Cookies.set(key, value, { expires: 14 });
};

export const getSessionCookie = ({ key }) => {
	const sessionCookie = Cookies.get(key);

	if (sessionCookie === undefined) {
		return null;
	} else {
		return sessionCookie;
	}
};

export const SessionContext = React.createContext(
	getSessionCookie({ key: "email" })
);
