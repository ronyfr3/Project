import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {BsInfoSquare} from 'react-icons/bs'
import {AiOutlineTeam} from 'react-icons/ai'
import {CgGames} from 'react-icons/cg'
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import {BsClockHistory} from 'react-icons/bs';
import {AiOutlineEllipsis} from "react-icons/ai";

const SideBar = () => (

    <div className="sidebar-wrapper">
        <h2>Wallet</h2>
        <ul>
            <li><MdOutlineDashboardCustomize className="icon"/> Dashboard</li>
            <li><AiOutlineTeam className="icon"/> Teams</li>
            <li><BsInfoSquare className="icon"/> Players</li>
            <li><CgGames className="icon"/> Games</li>
            <li><FiSettings className="icon"/> Settings</li>
        </ul>
        <div className="history-card">
            <div className="history-icons">
                <BsClockHistory className="clock-icon"/>
                <AiOutlineEllipsis className="dot-icons"/>
            </div>
            <div className="history-info">
                <h3>History Available</h3>
                <small>Check your info</small>
            </div>
        </div>
    </div>
    )

export default SideBar
