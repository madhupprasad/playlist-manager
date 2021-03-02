import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { youtubeLinkController, youtubeAuthCallback } from './youtube/index.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/youtube/callback', youtubeAuthCallback );
app.all('/youtube', youtubeLinkController);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})