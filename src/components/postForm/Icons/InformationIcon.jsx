import React from "react";
import { Box, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function InformationIconButton() {
  return (
    <Box sx={{ mx: 1 }}>
      <label>
        <IconButton color='primary' aria-label='upload picture' component='span'>
          <HelpOutlineIcon />
        </IconButton>
      </label>
    </Box>

)
}
{/* プレビューの表示機能追加予定 */}