import { createSlice } from "@reduxjs/toolkit";
import getPlayers from "../api/PlayersApi";

const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    loading: null,
  },
  extraReducers: {
    [getPlayers.pending]: (state) => {
      state.loading = "loading";
    },
    [getPlayers.fulfilled]: (state, action) => {
      state.players = action.payload;
      state.loading = "success";
    },
    [getPlayers.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export default playerSlice.reducer;