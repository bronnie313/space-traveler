import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
