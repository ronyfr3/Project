import { createAsyncThunk } from "@reduxjs/toolkit";

// GET GAMES STATS
const getStats = createAsyncThunk(
  "stats/getStats",
  async () => {
    return fetch("https://free-nba.p.rapidapi.com/stats?per_page=100&page=0", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "395089c821mshf87110cd07f43dep10e097jsn24093ed32c1a"
      }
    })
    .then(async response => response.json())
    .catch(err => {
      console.error(err);
    });
  }
);
export default getStats