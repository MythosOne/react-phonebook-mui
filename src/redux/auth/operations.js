import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorNetwork } from 'redux/error/errorHandlers';

axios.defaults.baseURL =
  'https://contacts-reader-backend-7k84.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      return response.data;
    } catch (error) {
      return handleErrorNetwork(error, 'Registration failed', thunkAPI);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleErrorNetwork(error, 'Authentication failed', thunkAPI);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return handleErrorNetwork(error, 'Logout failed', thunkAPI);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('no valid token');
    }

    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        thunkAPI.dispatch(logOut());
        return thunkAPI.rejectWithValue('Unauthorized');
      }

      return handleErrorNetwork(error, 'Refresh failed', thunkAPI);
    }
  }
);
