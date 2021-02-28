import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      playlists: [],
      no_data: false,
    };
    this.getAllPlaylist = this.getAllPlaylist.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getAllPlaylist(_token);
    }
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  async getAllPlaylist(token) {
    // Make a call using the token
    let result;

    result = await $.ajax({
      url: "https://api.spotify.com/v1/me/playlists",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
    });
    this.setState({
      playlists: result.items,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {this.state.token && !this.state.no_data && (
          <Player playlists={this.state.playlists} token={this.state.token} />
        )}
        {this.state.no_data && <p></p>}
      </div>
    );
  }
}

export default App;
