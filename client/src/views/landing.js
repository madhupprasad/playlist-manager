import React, { useState, useEffect } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../config/config";
import hash from "../components/hash";
import Playlist from "./playlist";
import {
	getSessionCookie,
	SessionContext,
	setSessionCookie,
} from "../components/sessions";
import { useHistory } from "react-router";

export const Landing = () => {
	let token = hash.access_token;
	const [playlist, setPlaylist] = useState([]);
	const session = React.useContext(SessionContext);
	const history = useHistory();

	useEffect(() => {
		console.log(session);
		if (!session) {
			history.push("/");
		}

		const abortController = new AbortController();
		const signal = abortController.signal;
		if (token) {
			console.log(token);
			// setSessionCookie({ key: "stoken", value: token });
			fetch(
				"https://api.spotify.com/v1/me/playlists",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
				{ signal: signal }
			)
				.then((res) => res.json())
				.then((res) => setPlaylist(res.items));
		}
		return function cleanup() {
			abortController.abort();
		};
	}, []);

	return (
		<div>
			{!token && (
				<div style={{ textAlign: "center" }}>
					<a
						href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
							"%20"
						)}&response_type=token&show_dialog=true`}
					>
						<img
							src="https://img.icons8.com/doodle/96/000000/spotify.png"
							alt="SPOTIFY"
						/>
					</a>
				</div>
			)}
			{token && <Playlist playlists={playlist} token={token} />}
		</div>
	);
};
