import adaptRequest from "../helpers/adapt-request.js";
import oAuthClient from "../utils/oauth-client.js";
import makeYoutubeLinkEndpoint from "./youtube-link-endpoint.js";

const authClient = oAuthClient();

async function youtubeLinkController(req,res){
    const httpRequest = adaptRequest(req)
    const { headers, statusCode, data } = await makeYoutubeLinkEndpoint({ authClient, httpRequest })
    res
        .set(headers)
        .status(statusCode)
        .send(data)
}

function youtubePlaylistController(req,res){
    const httpRequest = adaptRequest(req)
}

function youtubeAuthCallback(req,res){
    const httpRequest = adaptRequest(req)

}

export { youtubeLinkController, youtubePlaylistController };