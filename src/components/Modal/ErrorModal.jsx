import PropTypes from 'prop-types';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

import WarningIcon from '@mui/icons-material/Warning';

export const ErrorModal = ({ open, title, message, onConfirm }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            width: '50%',
            minWidth: '300px',
            maxWidth: '444px',
            backgroundColor: 'transparent',
            border: '1px solid rgb(236, 236, 236)',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            padding: '10px 14px',
            color: '#d32f2f',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <WarningIcon viewBox="0 0 24 26" />
          {title}
        </DialogTitle>
        <DialogContent sx={{ padding: '10px 14px' }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontSize: '16px',
              color: 'white',
              textShadow: '2px 2px 4px black',
            }}
          >
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onConfirm}
            color="primary"
            sx={{
              fontSize: '14px',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px black',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ErrorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
