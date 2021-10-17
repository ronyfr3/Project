import React from 'react'
import Filter from './Select'
import Table from './Table'
import Charts from "../Charts/Charts"
import RecentActivity from './RecentActivity'

const Overview = () => (
        <div className="overview-wrapper">
            <div className="filter-section">
                <Filter/>
                <Charts/>
                <RecentActivity/>
            </div>
            <div className="table-section">
               <Table/> 
            </div>
        </div>
)


export default Overview
