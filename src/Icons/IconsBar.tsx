import React from 'react';
import { Box } from '@mui/material';
import ImageUploadButton from './ImageUploadButton';
import SearchIconButton from './SearchIconButton';
import InformationIconButton from './InformationIcon';
import KeyboardIconButton from './KeyboardIcon';

export default function IconsBar({ onImageUpload, onMarkdownGuideToggle }) {

  const handleOpenMarkdown = () => {
    console.log('KeyboardIcon clicked!'); // デバッグ用
    onMarkdownGuideToggle();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        pt: 3,
        gap: 3,
        borderRight: '1px solid #dcdcdc'
      }}>
      <ImageUploadButton onImageUpload={onImageUpload} />
      <SearchIconButton />
      <InformationIconButton />
      <KeyboardIconButton onClick={handleOpenMarkdown} />
    </Box>
  )
}