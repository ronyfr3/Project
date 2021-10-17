import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playersReducer";
import gamesReducer from "./gamesReducer";
import statsReducer from "./StatsReducer";

export default configureStore({
  reducer: {
    players: playerReducer,
    games: gamesReducer,
    stats: statsReducer
  },
});