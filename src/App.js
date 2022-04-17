import './App.css';
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Configs/Spotify.config";
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Components/Player/Player";
import { useDataLayerValue } from './Context/DataLayer';

//this is the Spotify object
const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    //hiding the token for security reasons
    window.location.hash = "";
    
    //set token state to token value, if exists
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      })
    }
  }, []);

  return (
    <div className="App">
      {token ?
        <Player spotify={spotify}/>
        :
        <Login />
      }
    </div>
  );

}

export default App;
