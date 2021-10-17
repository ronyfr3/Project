import React from 'react'
import Cards from './cards/Cards';
import FilterSection from './cards/FilterSection';
import Overview from './Overview/Overview';

const Dashboard = () => {

    return (
        <div className="dashboard-wrapper">
            <FilterSection/>
            <Cards/>
            <Overview/>
        </div>
    )
}

export default Dashboard
