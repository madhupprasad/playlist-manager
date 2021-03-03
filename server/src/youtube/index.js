import adaptRequest from "../helpers/adapt-request.js";
import oAuthClient from "../utils/oauth-client.js";
import makeYoutubeLinkEndpoint from "./youtube-link-endpoint.js";
import makeYoutubeCallbackUrl from "./youtube-callback-endpoint.js";
import youtubeAllPlaylistEndpoint from "./youtube-all-playlist.js";
import dotenv from 'dotenv';

dotenv.config();

const authClient = oAuthClient();

async function youtubeLinkController(req,res){
    const httpRequest = adaptRequest(req);
    const { headers, statusCode, data } = await makeYoutubeLinkEndpoint({ authClient, httpRequest });
    res
        .set(headers)
        .status(statusCode)
        .send(data)
}

async function youtubePlaylistController(req,res){
    const httpRequest = adaptRequest(req)
    if(req.session.email && req.session.token){
        const { headers, statusCode, data } = await youtubeAllPlaylistEndpoint({ httpRequest, access_token: req.session.token })
        res
            .set(headers)
            .status(statusCode)
            .send(data)
    }else{
        res
            .status(403)
            .send({ success: false})
    }
}

async function youtubeAuthCallback(req,res){
    const httpRequest = adaptRequest(req);
    const { success, email="", token="" } = await makeYoutubeCallbackUrl({ authClient, httpRequest });
    if(email && token){
        req.session.email = email;
        req.session.token = token;
    }
    res
        .status(200)
        .send({ success })
}

export { youtubeLinkController, youtubePlaylistController, youtubeAuthCallback };