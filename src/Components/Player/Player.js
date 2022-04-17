import React from "react";
import "./Player.css";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer"

function Player({ spotify }) {
    return(
        <div>
            <div className="player">
                <div className="playerBody">
                    <Sidebar />
                    <Body />
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Player;