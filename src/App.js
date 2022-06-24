import React, { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./services/auth";
function App() {
  const spotify = new SpotifyWebApi();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) setToken(_token);
    spotify.setAccessToken(_token);

    spotify.getMe().then((user) => {
      console.log("user", user);
    });
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
