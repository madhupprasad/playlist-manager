import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router";
import { Login } from "./views/login";
import { Logout } from "./views/logout";
import { getSessionCookie, SessionContext } from "./components/sessions";
import { history } from "./history";
import { Landing } from "./views/landing";

export const Routes = () => {
	const [session, setSession] = useState(getSessionCookie());

	return (
		<SessionContext.Provider value={session}>
			<Router history={history}>
				<div className="navbar">
					<h6 style={{ display: "inline" }}>NAV BAR</h6>
					<h6 style={{ display: "inline", marginLeft: "5rem" }}>
						{session.email || "No user is logged in"}
					</h6>
				</div>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/logout" component={Logout}></Route>
					<Route exact path="/landing" component={Landing}></Route>
				</Switch>
			</Router>
		</SessionContext.Provider>
	);
};
