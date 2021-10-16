import { createSlice } from "@reduxjs/toolkit";
import getPlayers from "../api/Api";

const playerSlice = createSlice({
  name: "players",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getPlayers.pending]: (state) => {
      state.status = "loading";
    },
    [getPlayers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getPlayers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default playerSlice.reducer;