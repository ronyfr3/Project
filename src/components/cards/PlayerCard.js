import React from 'react'
import { useSelector } from "react-redux";
import {AiOutlineEllipsis} from "react-icons/ai"
import {BiFootball} from "react-icons/bi"

const PlayerCard = () => {
    const { players, loading } = useSelector(state => state.players)
    console.log('p',players);

     //Filtering Unique Teams
     function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
    const teams = players?.data?.map((x)=>x.team.full_name).filter(onlyUnique).length;
    const totalPlayers = players?.data?.map((x)=>x).length;
    if(loading==="loading") return "loading"
    return (
        <div className="player-card">
            <div className="playerCard-icons">
                <BiFootball className="ball-icon"/>
                <AiOutlineEllipsis className="dot-icons"/>
            </div>
            <div className="playerCard-info">
                <h3>{totalPlayers} players</h3>
                <small>From {teams} teams</small>
            </div>
        </div>
    )
}

export default PlayerCard
