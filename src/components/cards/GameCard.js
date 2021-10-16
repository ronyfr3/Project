import React from 'react'
import { useSelector } from "react-redux";
import {GiGoalKeeper} from "react-icons/gi";
import {AiOutlineEllipsis} from "react-icons/ai";

const GameCard = () => {
    const { games, loading_status} = useSelector(state => state.games)
    console.log('g',games);

    const highestGoal = Math.max.apply(null,games?.data?.map((x)=>x.visitor_team_score))
    const visitorTeam = games?.data?.find((x)=>x.visitor_team_score===highestGoal)?.visitor_team?.full_name
    const homeTeam = games?.data?.find((x)=>x.visitor_team_score===highestGoal)?.home_team?.full_name
    console.log(homeTeam);
    if(loading_status==="loading") return "loading"
    return (
        <div className="game-card">
            <div className="gameCard-icons">
                <GiGoalKeeper className="ball-icon"/>
                <AiOutlineEllipsis className="dot-icons"/>
            </div>
            <div className="gameCard-info">
                <h3>{ highestGoal === -Infinity ? 0 : highestGoal} highest goals</h3>
                <small>By {visitorTeam} VS {homeTeam}</small>
            </div>
        </div>
    )
}

export default GameCard
