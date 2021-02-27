import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Playlist from './components/Playlist';

const MainRouter = () => {
    
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route
                exact
                path="/playlists"
                name="playlists"
                component={Playlist}
            />
        </Switch>
    </BrowserRouter>
    );
  };
  export default MainRouter;