import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {BsInfoSquare} from 'react-icons/bs'
import {AiOutlineTeam} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineDashboardCustomize} from 'react-icons/md'

const SideBar = () => (

    <div className="sidebar-wrapper">
        <ul>
            <li><MdOutlineDashboardCustomize className="icon"/> Dashboard</li>
            <li><CgProfile className="icon"/> My Profile</li>
            <li><AiOutlineTeam className="icon"/> Teams</li>
            <li><BsInfoSquare className="icon"/> Players Info</li>
            <li><FiSettings className="icon"/> Settings</li>
        </ul>
    </div>
    )

export default SideBar
