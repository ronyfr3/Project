import React from 'react'
import { useSelector } from "react-redux";
import {GiGoalKeeper} from "react-icons/gi";
import {AiOutlineEllipsis} from "react-icons/ai";

const GameCard = () => {
    const { games } = useSelector(state => state.games)

    const highestGoal = Math.max.apply(null,games?.data?.map((x)=>x.visitor_team_score))
    const visitorTeam = games?.data?.find((x)=>x.visitor_team_score===highestGoal)?.visitor_team?.full_name
    const homeTeam = games?.data?.find((x)=>x.visitor_team_score===highestGoal)?.home_team?.full_name

    return (
        <div className="game-card">
            <div className="gameCard-icons">
                <GiGoalKeeper className="game-icon"/>
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
