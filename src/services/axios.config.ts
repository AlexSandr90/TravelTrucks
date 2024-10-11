import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
