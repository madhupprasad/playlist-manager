import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { MainRouter } from "./routes";
import { getSessionCookie, SessionContext } from "./components/sessions";

const IndexPage = () => {
	const [session, setSession] = useState(getSessionCookie({ key: "email" }));

	return (
		<SessionContext.Provider value={session}>
			<div>
				<h1>Welcome</h1>
			</div>
			<MainRouter></MainRouter>
		</SessionContext.Provider>
	);
};

ReactDOM.render(<IndexPage />, document.getElementById("root"));
