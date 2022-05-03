import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../Context/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function Body({ spotify}){
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return(
        <div className="body">
            <Header spotify={spotify}/>
            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="bodyInfoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="bodySongs">
                <div className="bodyIcons">
                    <PlayCircleFilled className="bodyShuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz/>
                </div>
                {discover_weekly?.tracks.items.map(item=>(
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
};

export default Body;