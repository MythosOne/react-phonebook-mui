import { useSelector, useDispatch } from 'react-redux';

import { ErrorModal } from '../Modal/ErrorModal';
import { hideError } from 'redux/auth/authSlice';
export const GlobalErrorHandling = () => {
  const { error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideError())
  };

  return (
    error && (
      <ErrorModal
        open={Boolean(error)}
        title={title}
        message={message}
        onConfirm={handleClose}
      />
    )
  );
};
