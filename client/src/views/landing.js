import React, { useState, useEffect } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../config/config";
import hash from "../components/hash";
import Playlist from "./playlist";
import { SessionContext } from "../components/sessions";

export const Landing = () => {
	const token = hash.access_token;
	const [playlist, setPlaylist] = useState([]);
	const session = React.useContext(SessionContext);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		if (token) {
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

			// getAllPlaylist(token).then((data) => setPlaylist(data));
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
