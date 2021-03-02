import getAuthUrl from '../../utils/auth-url.js';
import axios from 'axios';

let url = "";

export default async function getAuthenticationUrl({ authClient, scopes, req }){
    if(!url || 0===url.length){
        url = getAuthUrl({ authClient, scopes, req})
        const response = await axios.get(url);
        if(response){
            return url;
        }
    }else{
        return url;
    }
    return "";
}