import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const extraActions = [logIn, logOut, refreshUser, register];
const getActions = type => extraActions.map(action => action[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { username: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
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

  extraReducers: builder => {
    return builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // console.log('LogIn action payload:', action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        // console.log('isAnyOf(...getActions(pending))');
        // console.log('authSlice.isLoading:', state.isLoading);
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        // console.log('isAnyOf(...getActions(rejected))');
        // console.log('authSlice.isLoading:', state.isLoading);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        // console.log('isAnyOf(...getActions(fulfilled))');
        // console.log('authSlice.isLoading:', state.isLoading);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { showError, hideError } = authSlice.actions;

export const authReducer = authSlice.reducer;
