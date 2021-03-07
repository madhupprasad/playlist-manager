import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { MainRouter } from "./routes";
import { getSessionCookie, SessionContext } from "./components/sessions";

const IndexPage = () => {
	const [session, setSession] = useState(getSessionCookie());
	useEffect(() => {
		setSession(getSessionCookie());
	}, [session]);

	return (
		<SessionContext.Provider value={session}>
			<div style={{ textAlign: "center" }}>
				<h1>
					{session.email && (
						<h1>
							{session.email.substring(
								0,
								session.email.indexOf("@")
							)}
						</h1>
					)}
				</h1>
				{!session.email && <h1>Hello Stranger! </h1>}
			</div>
			<MainRouter></MainRouter>
		</SessionContext.Provider>
	);
};

ReactDOM.render(<IndexPage />, document.getElementById("root"));
