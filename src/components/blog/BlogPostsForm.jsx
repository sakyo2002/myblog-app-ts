import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  {id: 1, tag: 'Company'},
  {id: 2, tag: 'Product'},
  {id: 3, tag: 'Design'},
  {id: 4, tag: 'Engineering'},
];

export const BlogPostsForm = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = () => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Box>
      <Typography>新規投稿</Typography>
      <TextField
        select
        name='tag'
        label='カテゴリー'
        fullWidth
        value={formData.tag}
      >
        {categories.map((category) => (
          <MenuItem>
            {category.tag}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        name='title'
        label='タイトル'
        fullWidth
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        name='description'
        label='内容'
        fullWidth
        value={formData.description}
        variant='outlined'
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button variant='content' color='primary' onClick={handleSubmit}>
          投稿
        </Button>
        <Button variant='outlined' color='secondary' onClick={() => navigate('/')} >
          キャンセル
        </Button>
      </Box>
    </Box>
  )
}