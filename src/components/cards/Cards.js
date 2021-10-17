import React from 'react'
import GameCard from './GameCard'
import PlayerCard from './PlayerCard'
import StateCard from './StateCard'
import { useSelector } from "react-redux";
import Loading from "../Loading"

const Cards = () => {
    const { loading_state } = useSelector(state => state.stats)

    return (
        <div className="cards-wrapper">
            {
                loading_state==="loading" ? <Loading/> :(
                 <>
                    <PlayerCard/>
                    <GameCard/>
                    <StateCard/>
                 </>
                )
            }
        </div>
    )
}
export default Cards
