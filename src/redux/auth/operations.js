import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { showError } from '../error/errorSlice';

axios.defaults.baseURL =
  'https://contacts-reader-backend-7k84.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleErrorNetwork = (error, title, thunkAPI) => {
  if (!navigator.onLine || error.code === 'ERR_NETWORK') {
    console.log('Error_One', error);
    thunkAPI.dispatch(
      showError({
        title: 'Network error',
        message: 'Please check your internet connection and try again',
      })
    );
  } else {
    console.log('Error_Two', error);
    thunkAPI.dispatch(
      showError({
        title,
        message: error.response.data.message,
      })
    );
  }
  return thunkAPI.rejectWithValue(error.message);
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
