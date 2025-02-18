import { showError } from "./errorSlice";

export const handleErrorNetwork = (error, title, thunkAPI) => {
  if (!navigator.onLine || error.code === 'ERR_NETWORK') {
    thunkAPI.dispatch(
      showError({
        title: 'Network error',
        message: 'Please check your internet connection and try again',
      })
    );
  } else {
    thunkAPI.dispatch(
      showError({
        title,
        message: error.response.data.message,
      })
    );
  }
  return thunkAPI.rejectWithValue(error.message);
};