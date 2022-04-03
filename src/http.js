import axios from 'axios';
import { ENV } from '@/constants';
import { getAuthUser } from '@/utils/localStorageUtil';

const http = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const authUser = getAuthUser();
    if (authUser) {
      config.headers.Authorization = `Bearer ${authUser.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default http;
