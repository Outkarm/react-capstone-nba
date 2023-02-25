import { configureStore, combineReducers } from '@reduxjs/toolkit';
import nbaTeamSlice from './nbaTeams/nbaTeamSlice';

const rootReducer = combineReducers({
  nbaTeams: nbaTeamSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
