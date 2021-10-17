import React from 'react'
import { useSelector } from "react-redux";
import {MdOutlineReduceCapacity} from "react-icons/md";
import {AiOutlineEllipsis} from "react-icons/ai";


const StateCard = () => {
    const  {stats } = useSelector(state => state.stats)

    //Filtering Unique Divisions
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
    const totalDivisions = stats?.data?.map((x)=>x.team.division).filter(onlyUnique).length;
    const totalCities = stats?.data?.map((x)=>x.team.city).filter(onlyUnique).length;

    return (
        <div className="stat-card">
            <div className="statCard-icons">
                <MdOutlineReduceCapacity className="stat-icon"/>
                <AiOutlineEllipsis className="dot-icons"/>
            </div>
            <div className="statCard-info">
                <h3>{totalDivisions} Divisions</h3>
                <small>Total {totalCities} Cities</small>
            </div>
        </div>
    )
}

export default StateCard
