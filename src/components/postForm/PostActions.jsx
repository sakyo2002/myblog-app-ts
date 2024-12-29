import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import ReactIcon from './ReactIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { handleSubmit } from '../../utils/supabaseClient';

export default function PostActions({ title, tag, description }) {
  const navigate = useNavigate();

  const clickBack = () => {
    navigate(-1)
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e, {
      title,
      tag,
      description,
    })
    navigate('/');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button onClick={clickBack} sx={{ padding: 0, minWidth: 'auto' }} >
          <ChevronLeftIcon color='primary' sx={{ cursor: 'pointer' }} />
        </Button>
        <ReactIcon />
      </Box>
      <Box>
        <Stack direction='row' spacing={2}>
          <Button variant='outlined'>下書き保存</Button>
          <Button variant='contained' color='primary' onClick={clickSubmit}>公開保存</Button>
        </Stack>
      </Box>

    </Box>
  )
}