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
      state.reservations.push(payload.reservation);
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
          tmpList.push({ ...rocket, reserved: false });
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
