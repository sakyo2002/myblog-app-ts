import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const categories = [
  {id: 1, tag: 'Company'},
  {id: 2, tag: 'Product'},
  {id: 3, tag: 'Design'},
  {id: 4, tag: 'Engineering'},
];



export const BlogPostsForm = ({ open, onClose }) => {

  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>新規投稿</DialogTitle>
      <DialogContent>
        {/* カテゴリー選択 */}
        <FormControl fullWidth >
          <InputLabel>カテゴリー</InputLabel>
          <Select
            name='tag'
            value={tag}
            onChange={(e) => (setTag(e.target.value))}
            label='カテゴリー'
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.tag}>
                {category.tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* タイトルの入力 */}
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='タイトル'
          type='text'
          fullWidth
          variant='outlined'
          onChange={(e) => (setTitle(e.target.value))}
        />
        {/* 説明の入力 */}
        <TextField
          autoFocus
          margin='dense'
          id='description'
          label='内容'
          type='text'
          fullWidth
          variant='outlined'
          onChange={(e) => (setDescription(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={onClose}>投稿</Button>
      </DialogActions>
    </Dialog>
  )
}