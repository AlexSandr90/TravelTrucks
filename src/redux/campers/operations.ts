import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../services/axios.config';
import axios from 'axios';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page, limit }: { page: number; limit: number }, thunkApi) => {
    try {
      const response = await axiosInstance.get('/campers', {
        params: { page, limit },
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
