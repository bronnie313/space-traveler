import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [
    {
      name: '',
      description: '',
      img: '',
      status: '',
    },
  ],
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    createReservation: (state, { payload }) => {
      state.reservations.push(payload.reservation);
    },
  },
});

// Export actions
export const { createReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
