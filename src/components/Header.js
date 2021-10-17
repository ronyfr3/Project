import React from 'react'
import InputField from "./InputField"
import HeaderIcons from "./HeaderIcons"

const Header = () => (
        <div className="header-wrapper">
           <div className="header-content">
              <InputField/>
              <HeaderIcons/>
           </div>
        </div>
    )

export default Header
