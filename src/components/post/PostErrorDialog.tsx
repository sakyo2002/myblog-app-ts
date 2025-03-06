import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PostErrorDialogProps {
  open: boolean;
  onClose: () => void;
}

export const PostErrorDialog = ({ open, onClose }: PostErrorDialogProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/new-post');
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='post-error-dialog-title'
    >
      <DialogTitle id='post-error-dialog-title'>
        投稿に失敗しました
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color='primary' autoFocus>
          再試行
        </Button>
      </DialogActions>
    </Dialog>
 )
};