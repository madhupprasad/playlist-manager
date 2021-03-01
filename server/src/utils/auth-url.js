import _ from 'lodash';

export default function getAuthUrl({ oAuthClient = {}, scopes=[], req }){
    if(_.isEmpty(oAuthClient) || scopes.length === 0){
        throw new Error("Missing oAuth Client or scope")
    }else{
        return oAuthClient.generateAuthUrl({
            access_type:"offline",
            scopes:scopes,
            state: JSON.stringify({
                callbackUrl: req.body.callbackUrl,
                userId: req.body.userid
            })
        })
    }
}