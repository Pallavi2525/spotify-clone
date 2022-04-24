import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusicSharp"
import { useDataLayerValue } from '../../Context/DataLayer';
import logo from "../../images/Spotify_Logo_CMYK_White.png";

function Sidebar(){
    const [{playlists}, dispatch] = useDataLayerValue();
    return(
        <div className="sidebar">
            <img
            className="sidebarLogo"
            src={logo} 
            alt="Spotify"/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryIcon}/>
            <br/>
            <strong className="sidebarTitle">PLAYLISTS</strong>
            <hr />
            
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
};

export default Sidebar;