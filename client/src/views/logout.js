import React, { useEffect } from "react";
import * as Cookies from "js-cookie";

export const Logout = ({ history }) => {
	useEffect(() => {
		Cookies.remove("session");
		history.push("/login");
	}, [history]);

	return <div> Loggin' out </div>;
};
