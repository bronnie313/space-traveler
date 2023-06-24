import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROCKETS_URL } from '../../config/globals';

const initialState = {
  rocketLists: [],
  error: '',
  message: '',
  isLoading: true,
};
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => (
  axios
    .get(ROCKETS_URL)
    .then((response) => response.data)
));

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    createReservation: (state, { payload }) => {
      const newRocketList = state.rocketLists.map((rocket) => {
        const { id, reserved } = rocket;
        if (id === payload) {
          return { ...rocket, reserved: !reserved };
        }
        return rocket;
      });
      state.rocketLists = newRocketList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const tmpList = [];
        action.payload.forEach((rocket) => {
          tmpList.push(rocket);
        });
        state.rocketLists = tmpList;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { createReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
