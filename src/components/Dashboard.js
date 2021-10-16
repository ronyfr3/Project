import React from 'react'
import Cards from './cards/Cards';
import FilterSection from './cards/FilterSection';

const Dashboard = () => {

    return (
        <div className="dashboard-wrapper">
            <FilterSection/>
            <Cards/>
        </div>
    )
}

export default Dashboard
