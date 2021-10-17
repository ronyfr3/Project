import { createSlice } from "@reduxjs/toolkit";
import getStats from "../api/StatsApi";

const statSlice = createSlice({
  name: "stats",
  initialState: {
    stats: [],
    loading_state: null,
  },
  extraReducers: {
    [getStats.pending]: (state) => {
      state.loading_state = "loading";
    },
    [getStats.fulfilled]: (state, action) => {
      state.stats = action.payload;
      state.loading_state = "success";
    },
    [getStats.rejected]: (state) => {
      state.loading_state = "failed";
    },
  },
});

export default statSlice.reducer;