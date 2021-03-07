import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Logout } from "./views/logout";
import { Landing } from "./views/landing";
import App from "./App";

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route
					exact
					path="/landing"
					name="landing"
					component={Landing}
				/>
				<Route
					exact
					path="/logout"
					name="logout"
					component={Logout}
				></Route>
			</Switch>
		</BrowserRouter>
	);
};
