import axios from 'axios';
import allPlaylistsResponse from '../../helpers/all-playlist-response.js';

export async function getAllPlaylists({ access_token }){
    try {
        const response =  await axios.get('https://youtube.googleapis.com/youtube/v3/playlists',{
            params:{
              part: "snippet,contentDetails",
              mine: true,
            },
            headers:{
              authorization: "Bearer "+ access_token
            },
            "Content-type": "application/json"
        });
        return allPlaylistsResponse({ data: response.data })
    } catch (error) {
        console.log(`${error}`)
        return allPlaylistsResponse({ data: []})
    }
}

export async function getPlaylist({ access_token, playlist_id }){
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems',{
          params: {
            part: "snippet,contentDetails",
            mine: true,
            playlistId: playlist_id
          },
          headers: {
            authorization: "Bearer "+ access_token
          },
          "Content-type": "application/json"
      });
      return allPlaylistsResponse({ data: response.data })
    } catch (error) {
        console.log(`${error}`)
        return allPlaylistsResponse({ data: [] })
    }
}