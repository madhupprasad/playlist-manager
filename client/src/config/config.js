export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "da77289e09e04a39913441c1bdda89b5";
export const redirectUri = "http://localhost:3000/home";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
];

export const firebaseConfig = {
  apiKey: "AIzaSyCh-LSORh3H2A_t4Mlt0OKnU0gczMkHsO4",
  authDomain: "trial-84d99.firebaseapp.com",
  projectId: "trial-84d99",
  storageBucket: "trial-84d99.appspot.com",
  messagingSenderId: "315789646173",
  appId: "1:315789646173:web:8d40d9ae470fb029e830b4",
};
