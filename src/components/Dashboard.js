import React from 'react'
import { useSelector } from 'react-redux';
import Cards from './cards/Cards';
import FilterSection from './cards/FilterSection';
import Overview from './Overview/Overview';
import Loading from './Loading'

const Dashboard = () => {
    const { loading_state } = useSelector(state => state.stats)
    return (
        <div className="dashboard-wrapper">
            {
              loading_state==="loading" ? <Loading/> : (
                  <>
                    <FilterSection/>
                    <Cards/>
                    <Overview/>
                  </>
              )
            }
        </div>
    )
}

export default Dashboard
