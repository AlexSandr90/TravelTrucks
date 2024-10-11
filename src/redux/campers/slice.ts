import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations';
import { Camper } from '../../types/camper';

interface CamperState {
  items: Camper[];
  camper: Camper | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CamperState = {
  items: [],
  camper: null,
  status: 'idle',
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
