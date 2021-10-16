import { createAsyncThunk } from "@reduxjs/toolkit";

 //NBA PLAYERS API FROM RAPID_API
 const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {per_page: '25', page: '3'},
    headers: {
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': '395089c821mshf87110cd07f43dep10e097jsn24093ed32c1a'
    }
  };

const getPlayers = createAsyncThunk(
  "players/getPlayers",
  async () => {
    return fetch(options)
      .then(async (res) => res.json())
      .catch((err) => err);
  },
);
export default getPlayers;