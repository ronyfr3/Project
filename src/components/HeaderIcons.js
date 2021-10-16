import React from 'react'
import {AiOutlineBell} from "react-icons/ai"
import {BsChatLeftText} from "react-icons/bs"
import {FiGift} from "react-icons/fi"
import {FiSettings} from 'react-icons/fi'

const HeaderIcons = () => (
        <div className="header-icons">
            <ul>
                <li><AiOutlineBell/></li>
                <li><BsChatLeftText/></li>
                <li><FiGift/></li>
                <li><FiSettings/></li>
            </ul>
        </div>
    )

export default HeaderIcons
