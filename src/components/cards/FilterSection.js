import React from 'react'
import {BsSliders} from 'react-icons/bs'

const FilterSection = () =>  (

        <div className="filterSection">
            <h2>Dashboard</h2>
            <button>
                <p>Filters</p> <BsSliders className="filter-icon"/>
            </button>
        </div>
    )

export default FilterSection
