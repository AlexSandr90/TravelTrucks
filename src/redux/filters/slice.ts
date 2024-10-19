import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterTypes {
  location?: string;
  form?: string;
  transmission?: string | null;
  features: {
    bathroom?: boolean;
    AC?: boolean;
    kitchen?: boolean;
    TV?: boolean;
    refrigerator?: boolean;
    microwave?: boolean;
    radio?: boolean;
  };
}

const initialState: FilterTypes = {
  location: '',
  form: '',
  transmission: null,
  features: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setForm: (state, action: PayloadAction<string>) => {
      state.form = action.payload;
    },
    setTransmission: (state, action: PayloadAction<string | null>) => {
      state.transmission = action.payload;
    },
    toggleFeature: (
      state,
      action: PayloadAction<typeof initialState.features>
    ) => {
      state.features = { ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const {
  setForm,
  setLocation,
  resetFilters,
  toggleFeature,
  setTransmission,
} = filtersSlice.actions;
export default filtersSlice.reducer;
