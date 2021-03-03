import makeHttpError from "../helpers/http-error.js";
import makeHttpResponse from "../helpers/http-response.js";
import getAllPlaylists from './services/get-all-playlist.js';

export default async function youtubeAllPlaylistEndpoint({ httpRequest, access_token }){
    switch(httpRequest.method){
        case 'GET':
            const response = await getAllPlaylists({ access_token })
            return new makeHttpResponse({
                statusCode: 200,
                data: response
            })
        default:
            return new makeHttpError({
                status: 400,
                errorMessage: `${httpRequest.method} not valid request`
            })
    }
}