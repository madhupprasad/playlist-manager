import adaptRequest from "../helpers/adapt-request.js";
import oAuthClient from "../utils/oauth-client.js";
import makeYoutubeLinkEndpoint from "./youtube-link-endpoint.js";
import makeYoutubeCallbackUrl from "./youtube-callback-endpoint.js";
import dotenv from 'dotenv';

dotenv.config();

const authClient = oAuthClient();

async function youtubeLinkController(req,res){
    const httpRequest = adaptRequest(req);
    console.log(authClient)
    const { headers, statusCode, data } = await makeYoutubeLinkEndpoint({ authClient, httpRequest });
    res
        .set(headers)
        .status(statusCode)
        .send(data)
}

function youtubePlaylistController(req,res){
    const httpRequest = adaptRequest(req)
}

async function youtubeAuthCallback(req,res){
    const httpRequest = adaptRequest(req);
    const { success } = await makeYoutubeCallbackUrl({ authClient, httpRequest });
    res
        .status(200)
        .send({ success })
}

export { youtubeLinkController, youtubePlaylistController, youtubeAuthCallback };