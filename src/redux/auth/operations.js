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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      return response.data;
    } catch (error) {
      thunkAPI.dispatch(
        showError({
          title: 'Registration failed',
          message: 'Please try again',
        })
      );
      return thunkAPI.rejectWithValue(error.message);
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
      thunkAPI.dispatch(
        showError({
          title: 'Authentication failed',
          message: 'Please check your login details and try again',
        })
      );

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    thunkAPI.dispatch(
      showError({
        title: 'Logout failed',
        message: 'Please try again',
      })
    );
    return thunkAPI.rejectWithValue(error.message);
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
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
