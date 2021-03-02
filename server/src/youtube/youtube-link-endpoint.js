import getAuthenticationUrl from './services/get-auth-url.js'
import makeHttpError from '../helpers/http-error.js';
import makeHttpResponse from '../helpers/http-response.js';

export default async function makeYoutubeLinkEndpoint({ authClient, httpRequest }){
        
    switch(httpRequest.method){
        case 'GET':
            const scopes = ["https://www.googleapis.com/auth/youtube profile email openid"]
            const url = await getAuthenticationUrl({ authClient, scopes, req: httpRequest })
            if(url && 0!==url.length){
                return makeHttpResponse({
                    statusCode: 200,
                    data: url
                })
            }
            return makeHttpError({
                statusCode: 500,
                errorMessage: `Error forming url for Authentication`
            })
        default:
            return makeHttpError({
                statusCode: 403,
                errorMessage: `${httpRequest.method} not allowed`
            })
    }
}