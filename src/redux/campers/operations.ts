import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FiltersTypeParams } from '../../types/filtersTypeParams';


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";


const filteredParams = (params: FiltersTypeParams) =>
  Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  );

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (params: FiltersTypeParams, thunkApi) => {
    const queryParams = filteredParams(params);

    try {
      const response = await axios.get('/campers', {
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
      const response = await axios.get(`/campers/${id}`);
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
