import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';

const categories = [
  {id: 1, tag: 'Company'},
  {id: 2, tag: 'Product'},
  {id: 3, tag: 'Design'},
  {id: 4, tag: 'Engineering'},
];



export const BlogPostsForm = ({ open, onClose }) => {

  const [formData, setFormData] = useState({
    tag: '',
    title: '',
    description: '',
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>新規投稿</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='タイトル'
          type='text'
          fullWidth
          variant='outlined'
        />
        <TextField
          autoFocus
          margin='dense'
          id='cantent'
          label='内容'
          type='text'
          fullWidth
          variant='outlined'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={onClose}>投稿</Button>
      </DialogActions>
    </Dialog>
  )
}