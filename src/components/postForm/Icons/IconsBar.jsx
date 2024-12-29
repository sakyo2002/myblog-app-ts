import React from 'react';
import { Box } from '@mui/material';
import ImageUploadButton from './ImageUploadButton';
import SearchIconButton from './SearchIconButton';
import InformationIconButton from './InformationIcon';

export default function IconsBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundColor:'white',
        border: '1px solid #c0c5c2',
        borderRadius: '5px',
        mb: 1,
      }}>
      <ImageUploadButton />
      <SearchIconButton />
      <InformationIconButton />
    </Box>
  )
}