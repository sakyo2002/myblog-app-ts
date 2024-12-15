import React from "react";
import { useState } from "react";
import { Box } from '@mui/material';
import PostActions from './PostActions';
import PostTitleInput from "./PostTitleInput";
import PostTags from './PostTags';
import PostContentEditor from './PostContentEditor';
import IconsBar from "./Icons/IconsBar";
import MarkdownContent from "./MarkdownContent";

export default function BlogPostsForm() {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState('');

  return (
    <Box
      fullWidth
      sx={{ backgroundColor: '#f5f5f5', p: 2 }}
    >
      <PostActions title={title} tag={tag} description={description} />
      <PostTitleInput value={title} onChange={setTitle} />
      <PostTags value={tag} onChange={setTag} />
      <IconsBar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ flex: 1, height: '100%' }}>
          <PostContentEditor value={description} onChange={setDescription} />
        </Box>
        <Box sx={{ width: '400px', height: '100%' }}>
          <MarkdownContent />
        </Box>
      </Box>
    </Box>
  )
}
