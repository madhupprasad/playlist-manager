import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { youtubeLinkController, youtubeAuthCallback, youtubePlaylistController } from './youtube/index.js';
import cookieSession from 'cookie-session';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
    name:'oauth-youtube',
    keys: ['cat','dog'],
    //6 months
    maxAge: 60*60*1000
}))

app.use('/youtube/callback', youtubeAuthCallback );
app.all('/youtube', youtubeLinkController);
app.all('/playlist', youtubePlaylistController);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})