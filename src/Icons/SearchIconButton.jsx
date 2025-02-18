import React from "react";
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchIconButton() {
  return (
    <Box sx={{ mx: 1 }}>
      <label>
        <IconButton color='primary' aria-label='upload picture' component='span'>
          <SearchIcon />
        </IconButton>
      </label>
    </Box>

)
}
{/* プレビューの表示機能追加予定 */}