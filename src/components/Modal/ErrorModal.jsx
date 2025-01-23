import { useState } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export const ErrorModal = ({ /*open, onClose,*/ onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            width: '40%',
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
            color: '#d32f2f',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <WarningIcon />
          Attention
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontSize: '16px',
              color: 'white',
              textShadow: '2px 2px 4px black',
            }}
          >
            Email or password is wrong
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button
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
            To correct
          </Button> */}
          <Button
            onClick={onConfirm}
            color="primary"
            sx={{
              fontSize: '14px',
              color: 'white',
              textShadow: '2px 2px 4px black',
              '&:hover': {
                fontWeight: 'bold',
                transform: 'scale(1.05)',
              },
            }}
            autoFocus
          >
            To correct
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
