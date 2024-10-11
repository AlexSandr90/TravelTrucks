import { RootState } from '../store';

export const selectCampersList = (state: RootState) => state.campers.items;
export const selectCampersStatus = (state: RootState) => state.campers.status;
