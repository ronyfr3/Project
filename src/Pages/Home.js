import React from 'react'
import { useDispatch } from "react-redux";
import getPlayers from "../api/Api"
import Dashboard from '../components/Dashboard';
import SideBar from '../components/SideBar';

const Home = () => {
const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

    return (
        <div>
            <SideBar/>
            <Dashboard/>
        </div>
    )
}

export default Home
