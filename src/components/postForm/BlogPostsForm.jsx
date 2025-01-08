import React from "react";
import { useState } from "react";
import { Box } from '@mui/material';
import PostActions from './PostActions';
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from './PostContentEditor';
import IconsBar from "./Icons/IconsBar";
import MarkdownContent from "./MarkdownContent";

export default function BlogPostsForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box
      fullWidth
      sx={{ backgroundColor: '#f5f5f5', p: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <PostActions title={title} description={description} />
      <PostTitleInput value={title} onChange={setTitle} />
      <IconsBar />
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', height: '100%' }}>
        <Box sx={{ flex: 1 }}>
          <PostContentEditor value={description} onChange={setDescription} />
        </Box>
        <Box sx={{ width: '400px' }}>
          <MarkdownContent />
        </Box>
      </Box>
    </Box>
  )
}
