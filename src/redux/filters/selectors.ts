import { RootState } from '../store';

export const selectLocation = (state: RootState) => state.filters.location;
export const selectBodyType = (state: RootState) => state.filters.bodyType;
export const selectFeatures = (state: RootState) => state.filters.features;
