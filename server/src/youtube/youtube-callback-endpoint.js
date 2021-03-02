import getAuthToken from "./services/get-auth-token.js";

export default async function makeYoutubeCallbackUrl({ authClient, httpRequest }){
    switch(httpRequest.method){
        case 'GET':
            const { email, token } = await getAuthToken({ authClient, req: httpRequest })
            if(email && token){
                return {
                    success: true
                }
            }else{
                return {
                    success: false
                }
            }
        default:
            return {
                success: false
            }
    }
}