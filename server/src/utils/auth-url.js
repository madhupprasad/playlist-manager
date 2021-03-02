import _ from 'lodash';

export default function getAuthUrl({ authClient = {}, scopes=[], req }){
    if(_.isEmpty(authClient) || scopes.length === 0){
        throw new Error("Missing oAuth Client or scope")
    }else{
        return authClient.generateAuthUrl({
            access_type:"offline",
            scope:scopes,
            state: JSON.stringify({
                callbackUrl: req.body.callbackUrl,
                userId: req.body.userid
            })
        })
    }
}