import React, {  useEffect } from 'react';
import { AuthContext } from '../index';

export default function Playlist() {

    const { auth } = React.useContext(AuthContext);
    return (
        <div>
            Playlist_loaded
        </div>
    )
}
