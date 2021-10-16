import React from 'react'
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { data, status } = useSelector(state => state.players)

    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default Dashboard
