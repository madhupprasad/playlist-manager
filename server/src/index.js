import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import oAuthClient from './utils/oauth-client.js';
import getAuthUrl from './utils/auth-url.js';
import dotenv from 'dotenv';

dotenv.config();

let url = '';
const app = express();
const authClient = oAuthClient();
app.use(bodyParser.json());

app.get('/geturl',async(req,res)=>{
    const scopes = ["https://www.googleapis.com/auth/youtube profile email openid"]
    if(!url || 0===url.length){
        url = getAuthUrl({ oAuthClient:authClient, scopes, req})
        const response = await axios.get(url);
        if(response){
            res.send({ url });
        }
    }else{
        res.send({ url });
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})