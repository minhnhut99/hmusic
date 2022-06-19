import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./services/auth";
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
