import makeHttpError from "../helpers/http-error.js";
import makeHttpResponse from "../helpers/http-response.js";
import { getAllPlaylists, getPlaylist } from './services/get-playlist.js';

export default async function youtubeAllPlaylistEndpoint({ httpRequest, access_token }){
    try {
        switch(httpRequest.method){
            case 'GET':
                let response = await getAllPlaylists({ access_token })
                return new makeHttpResponse({
                    statusCode: 200,
                    data: response
                })
            case 'POST':
                let res = await getPlaylist({ access_token, playlist_id: httpRequest.body?.playlist })
                return new makeHttpResponse({
                    statusCode: 200,
                    data: res
                })
            default:
                return new makeHttpError({
                    status: 400,
                    errorMessage: `${httpRequest.method} not valid request`
                })
        }
    } catch (error) {
        console.log(`${error}`)
        return new makeHttpError({
            status: 500,
            errorMessage: `Error Processing data`
        })
    } 
}