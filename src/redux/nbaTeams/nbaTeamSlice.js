import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  nbaTeams: [],
  nbaPlayers: [],
  isLoading: false,
};

const FETCH_NBA_PLAYERS_DATA = 'nbaPlayers/getNbaPlayersData';
const FETCH_NBA_TEAM_DATA = 'nbaTeams/getNbaTeamsData';

export const getNbaTeamsData = createAsyncThunk(
  FETCH_NBA_TEAM_DATA,
  async () => {
    try {
      const response = await axios.get(
        'https://www.balldontlie.io/api/v1/teams',
      );

      const nbaTeamApi = [];
      response.data.data.forEach((data) => {
        const {
          id,
          abbreviation,
          city,
          conference,
          division,
          full_name: teamName,
          name,
        } = data;
        const nbaTeamsData = {
          id,
          abbreviation,
          city,
          conference,
          division,
          teamName,
          name,
        };
        nbaTeamApi.push(nbaTeamsData);
      });

      return nbaTeamApi;
    } catch (error) {
      return error;
    }
  },
);

export const getNbaPlayersData = createAsyncThunk(
  FETCH_NBA_PLAYERS_DATA,
  async () => {
    try {
      const response = await axios.get(
        'https://www.balldontlie.io/api/v1/players',
      );
      const nbaPlayersApi = [];
      response.data.data.forEach((data) => {
        const {
          team,
          first_name: firstName,
          last_name: lastName,
          position,
          height_feet: heightFeet,
          height_inches: heightInches,
          weight_pounds: weightPounds,
        } = data;
        const nbaPlayersData = {
          team,
          firstName,
          lastName,
          position,
          heightFeet,
          heightInches,
          weightPounds,
        };
        nbaPlayersApi.push(nbaPlayersData);
      });

      return nbaPlayersApi;
    } catch (error) {
      return error;
    }
  },
);

const nbaTeamsSlice = createSlice({
  name: 'nbaTeams',
  initialState,
  reducers: {
    nba: (state, action) => ({
      ...state,
      nba: action.payload,
    }),
  },
  extraReducers: {
    [getNbaTeamsData.fulfilled]: (state, action) => ({
      ...state,
      nbaTeams: action.payload,
      isLoading: false,
    }),
    [getNbaTeamsData.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getNbaTeamsData.pending]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
  moreReducers: {
    [getNbaPlayersData.fulfilled]: (state, action) => ({
      ...state,
      nbaPlayers: action.payload,
      isLoading: false,
    }),
    [getNbaPlayersData.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getNbaPlayersData.pending]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { nba, nbaData } = nbaTeamsSlice.actions;

export default nbaTeamsSlice.reducer;
