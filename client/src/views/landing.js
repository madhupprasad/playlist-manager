import React, { useState, useEffect, useContext } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "../config/config";
import hash from "../components/hash";
import Playlist from "../views/Player";

export const Landing = () => {
	const [token, setToken] = useState(hash.access_token);
	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		if (token) {
			getAllPlaylist(token);
		}
	}, [token]);

	const getAllPlaylist = async () => {
		let result;
		result = await $.ajax({
			url: "https://api.spotify.com/v1/me/playlists",
			type: "GET",
			beforeSend: (xhr) => {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
		});
		console.log(result.items);
		setTimeout(() => setPlaylist(result.items), 1000);
		// setPlaylist(result.items);
	};
	return (
		<div>
			{!token && (
				<a
					className="btn btn--loginApp-link"
					href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
						"%20"
					)}&response_type=token&show_dialog=true`}
				>
					Login to Spotify
				</a>
			)}
			{token && <Playlist playlists={playlist} token={token} />}
		</div>
	);
};
