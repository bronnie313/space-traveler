import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  isLoading: true,
  active: true,
};

export const getMissions = createAsyncThunk('mission/getMissions', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state) => {
      state.active = true;
    },
    leaveMission: (state) => {
      state.active = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missionItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
