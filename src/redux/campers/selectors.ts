import { RootState } from '../store';

export const selectCamper = (state: RootState) => state.campers.camper;
export const selectIsLoading = (state: RootState) => state.campers.isLoading;
export const selectCampersList = (state: RootState) => state.campers.items;
export const selectCampersStatus = (state: RootState) => state.campers.status;
