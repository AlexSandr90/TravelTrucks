import { createSlice } from '@reduxjs/toolkit';

interface FiltersState {
  location: string;
  bodyType: string;
  features: string[];
}

const initialState: FiltersState = {
  location: '',
  bodyType: '',
  features: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload;
    },
    toggleFilters: (state, action) => {
      if (state.features.includes(action.payload)) {
        state.features = state.features.filter(
          (feature) => feature !== action.payload
        );
      } else {
        state.features.push(action.payload);
      }
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setBodyType, toggleFilters, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
