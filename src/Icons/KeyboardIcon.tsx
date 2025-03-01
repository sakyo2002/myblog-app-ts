import React from "react";
import { Box, IconButton } from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function KeyboardIconButton({ onClick }) {
  return (
    <Box sx={{ mx: 1 }}>
      <label>
        <IconButton
          onClick={onClick}
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <KeyboardIcon />
        </IconButton>
      </label>
    </Box>
)
}