import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PostSuccessDialog = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='post-success-dialog-title'
    >
      <DialogTitle id='post-success-dialog-title'>
        投稿が完了しました
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          新しい記事が正常に投稿されました
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary' autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}