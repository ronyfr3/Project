import React from 'react'
import { useDispatch } from "react-redux";
import getPlayers from "../api/PlayersApi"
import getGames from "../api/GamesApi"
import Dashboard from '../components/Dashboard';
import SideBar from '../components/SideBar';

const Home = () => {
const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getPlayers());
    dispatch(getGames());
  }, [dispatch]);

    return (
        <div className="home-wrapper">
            <div className="home-content-1">
              <SideBar/>
            </div>
            <div className="home-content-2">
              <Dashboard/>
            </div>
        </div>
    )
}

export default Home
