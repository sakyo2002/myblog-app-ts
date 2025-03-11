import React from "react";
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchIconButton: React.FC = () => {
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