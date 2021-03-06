import React, { useState } from "react";
import "../styles/Player.css";
import * as $ from "jquery";

const Player = (props) => {
  const [songs, setSongs] = useState({}); //for caching songs from playlist
  const [currentSongs, setCurrentSongs] = useState({});

  async function getSongs(id) {
    let result;

    if (id in songs) {
      //if already in songs retrieve
      result = songs[id];
    } else {
      //else make api call
      result = await $.ajax({
        url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + props.token);
        },
      });
      // caching songs from api call
      const updatedSongs = {};
      updatedSongs[id] = result;
      setSongs({
        ...songs,
        ...updatedSongs,
      });
    }
    //setting current songs of playlist
    const current = result.items.map((item) => (
      <li key={item.track.id}>{item.track.name}</li>
    ));
    setCurrentSongs(current);
  }

  const listItems = props.playlists.map((item) => (
    <div key={item.name} className="unit">
      <div>{item.name}</div>
      <img
        onClick={() => getSongs(item.id)}
        src={item.images[0].url}
        height="300"
        width="300"
        alt={item.name}
      />
    </div>
  ));

  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: "center" }}>Playlists</h1>
        <div className="playlist">{listItems}</div>
        {currentSongs.length > 0 && <ul>{currentSongs}</ul>}
      </div>
    </div>
  );
};
export default Player;
