import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../../services/axios.config';
import axios from 'axios';
import { FetchCampersParams } from '../../types/fetchCampersParams';


const filteredParams = (params: FetchCampersParams) =>
  Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  );

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (params: FetchCampersParams, thunkApi) => {
    const queryParams = filteredParams(params);

    try {
      const response = await axiosInstance.get('/campers', {
        params: queryParams,
      });

      const data = response.data;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id: string, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

export const clearCampers = createAction('campers/clearCampers');
