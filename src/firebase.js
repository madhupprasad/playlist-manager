import { firebase } from "@firebase/app";

var firebaseui = require("firebaseui");

var firebaseConfig = {
  apiKey: "AIzaSyCSAiluZEiptP0x0moBCUcGY07AY468_lY",
  authDomain: "playlist-manager-1.firebaseapp.com",
  projectId: "playlist-manager-1",
  storageBucket: "playlist-manager-1.appspot.com",
  messagingSenderId: "437556427667",
  appId: "1:437556427667:web:56a70155ae21dcca018666",
  measurementId: "G-BPQ19M8WTD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export const start = () =>
  ui.start("#firebaseui", {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        console.log(authResult);
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById("loader").style.display = "none";
      },
    },
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });
