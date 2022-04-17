import React from "react";
import "./Login.css";
import logo from "../../images/Spotify_Logo.png";
import { loginUrl } from "../../Configs/Spotify.config";

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Spotify" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    );
}

export default Login;