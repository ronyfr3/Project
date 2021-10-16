import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const InputField = () => (
    
        <div className="input-field">
            <input type="text" placeholder="search"/>
            <AiOutlineSearch className="search-icon"/>
        </div>
    )

export default InputField
