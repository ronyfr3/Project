import { createSlice } from "@reduxjs/toolkit";
import getGames from "../api/GamesApi";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading_status: null,
  },
  extraReducers: {
    [getGames.pending]: (state) => {
      state.loading_status = "loading";
    },
    [getGames.fulfilled]: (state, action) => {
      // console.log('games',action.payload);
      state.games = action.payload;
      state.loading_status = "success";
    },
    [getGames.rejected]: (state) => {
      state.loading_status = "failed";
    },
  },
});

export default gamesSlice.reducer;