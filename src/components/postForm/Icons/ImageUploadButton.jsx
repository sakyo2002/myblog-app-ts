import React from "react";
import { Box, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

export default function ImageUploadButton() {
  return (
    <Box sx={{ mx: 1 }}>
      <label>
        <IconButton color='primary' aria-label='upload picture' component='span'>
          <ImageIcon />
        </IconButton>
      </label>
    </Box>

)
}
{/* プレビューの表示機能追加予定 */}