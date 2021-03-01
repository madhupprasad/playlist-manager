import { google } from 'googleapis';

export default function getOauthClient(){
    return new google.auth.OAuth2(
        //Client-id
        process.env.CLIENT_ID,
        //Client-secret
        process.env.CLIENT_SECRET,
        //Redirect-uri
        process.env.REDIRECT_URI
    );
}