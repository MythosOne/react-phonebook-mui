import { useSelector, useDispatch } from 'react-redux';

import { ErrorModal } from '../Modal/ErrorModal';
import { hideError } from 'redux/error/errorSlice';
import { selectError } from 'redux/error/selectors';
export const GlobalErrorHandling = () => {
  const { open , title, message } = useSelector(selectError);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideError())
  };

  return (
    open && (
      <ErrorModal
        open={open}
        title={title}
        message={message}
        onConfirm={handleClose}
      />
    )
  );
};
