import React, { useEffect } from "react";
import * as Cookies from "js-cookie";

export const Logout = () => {
	useEffect(() => {
		Cookies.remove("session");
	}, []);

	return <div> Loggin' out </div>;
};
