import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Visibility } from '@mui/icons-material';

const articleInfo = [
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
]

const StyledTypography = styled(Typography) ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertial',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    
  }
}))

export default function Latest() {
  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>

      </Grid>
    </Container>
  )
}