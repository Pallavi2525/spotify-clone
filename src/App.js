import './App.css';
import Login from "./Pages/Login/Login";
import { getTokenFromUrl } from "./Configs/Spotify.config";
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

//this is the Spotify object
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    debugger
    const hash = getTokenFromUrl();

    //hiding the token for security reasons
    window.location.hash = "";
    
    //set token state to token value, if exists
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
    console.log("Token value = ", token);
  }, [])

  return (
    <div className="App">{token ? <h1>Logged in</h1> : <Login />}</div>
  );

}

export default App;
