import React from "react";
import { Box, Typography } from '@mui/material';

export default function BlogHeader() {
  return (
    <Box>
      <Typography variant='h3' gutterBottom>
        Blog
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Stay in the loop with the latest about our products
      </Typography>
    </Box>
  )
}