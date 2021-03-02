import axios from 'axios';
import urlParse from 'url-parse';
import queryParse from 'query-string';
 
export default async function getAuthToken({ authClient, req }){
    try {
        const queryURL = new urlParse(req.url);
        const code =  queryParse.parse(queryURL.query).code;
        const token = await authClient.getToken(code);
        const { data } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json',{
            headers: {
            authorization: "Bearer "+ token.tokens.access_token
            },
            "Content_type": "application/json"
        });
        return {
            "email": data.email,
            "token": token.tokens.access_token 
        }     
    } catch (error) {
        console.log(error)
        return {
            "email": "",
            "token": ""
        }
    }
}