import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CodeSproutIcon() {
  const navigate = useNavigate();
  const clickHomeBack = () => {
    navigate('/');
  }

  return (
    <Box>
      <Typography
      variant='h6'
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
        }}
      >
        <Box
          onClick={clickHomeBack}
          sx={{ cursor: 'pointer' }}
        >
          <span style={{ color: 'blue' }}>Code</span>
          <span style={{ color: 'green' }}>Sprout</span>
        </Box>
      </Typography>
    </Box>
  );
}