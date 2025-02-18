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

export const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiPaper-root': {
          width: '50%',
          minWidth: '300px',
          maxWidth: '344px',
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
          padding: '10px 14px',
          fontWeight: 'bold',
          color: '#d32f2f',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <WarningIcon viewBox="0 0 24 26" />
        Deletion confirmation
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
          Are you sure you want to delete this contact? This action is not
          allowed cancel.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
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
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          color="error"
          sx={{
            fontSize: '14px',
            textShadow: '2px 2px 4px black',
            '&:hover': {
              color: 'red',
              fontWeight: 'bold',
              transform: 'scale(1.05)',
            },
          }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
