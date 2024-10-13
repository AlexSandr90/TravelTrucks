import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
