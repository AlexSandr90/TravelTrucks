import { RootState } from '../store';

export const selectLocation = (state: RootState) => state.filters.location;
export const selectBodyType = (state: RootState) => state.filters.form;
export const selectFeatures = (state: RootState) => state.filters.features;
export const selectTransmission = (state: RootState) =>
  state.filters.transmission;
