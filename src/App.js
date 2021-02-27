import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { firebase } from "@firebase/app";
import { AuthContext } from "./index";
const firebaseui = require("firebaseui");


var firebaseConfig = {
  apiKey: "AIzaSyCSAiluZEiptP0x0moBCUcGY07AY468_lY",
  authDomain: "playlist-manager-1.firebaseapp.com",
  projectId: "playlist-manager-1",
  storageBucket: "playlist-manager-1.appspot.com",
  messagingSenderId: "437556427667",
  appId: "1:437556427667:web:56a70155ae21dcca018666",
  measurementId: "G-BPQ19M8WTD",
};

firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());


const App = () => {
  
  const history = useHistory();
  const [ currentauth, setCurrentAuth ] = useState(false);
  const { auth, setauth } = React.useContext(AuthContext);

  const stateupdate = () => {
    setCurrentAuth(true);
    console.log("Called");
  }

  useEffect(()=>{
    if(currentauth){
      setauth(currentauth);
      history.push("/playlists");
    }
  },[currentauth])

  useEffect(()=> {
      if(!auth){
        ui.start("#firebaseui", {
          callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
              stateupdate();
              return false;
            },
            uiShown: function () {
              document.getElementById("loader").style.display = "none";
            },
          },
          signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          ],
          signInSuccessUrl: '/playlists'
        });
      }
    },[])

  return (
    
      <div>
        <div id="firebaseui"></div>
        <div id="loader">Loading...</div>
      </div>
    );
}

export default App;
