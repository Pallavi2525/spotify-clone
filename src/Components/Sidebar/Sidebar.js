import React from "react";
import "./Sidebar.css";

function Sidebar(){
    return(
        <div className="sidebar">
            <img
            className="sidebarLogo"
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" 
            alt="Spotify"/>
        </div>
    );
};

export default Sidebar;