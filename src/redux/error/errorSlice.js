import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
  initialState: {
    open: false,
    title: '',
    message: '',
  },
  
  reducers: {
    showError(state, action) {
      const { title, message } = action.payload;
      state.open = true;
      state.title = title;
      state.message = message;
    },
    hideError(state) {
      state.open = false;
      state.title = '';
      state.message = '';
    },
  },
});

export const { showError, hideError } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;