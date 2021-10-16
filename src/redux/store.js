import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playersReducer";
import gamesReducer from "./gamesReducer";

export default configureStore({
  reducer: {
    players: playerReducer,
    games: gamesReducer
  },
});