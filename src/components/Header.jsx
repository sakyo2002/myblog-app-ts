import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CodeSproutIcon from './CodeSproutIcon';
import SearchBar from './SearchBar';
import CreatePostButton from "./CreatePostButton";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}))

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = React.useCallback((newOpen) => () => {
    setOpen(newOpen);
  }, []);

  return (
    <AppBar
      position='fixed'
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', p: 3 }}
    >
      <Container maxWidth='xl'>
        <StyledToolbar variant='dense' disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CodeSproutIcon />
            <SearchBar />
            <CreatePostButton />
          </Box>
          <Box
            sx={{
              display: {xs: 'none', md: 'flex'},
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color='primary' variant='text' size='small' sx={{ textTransform: 'none' }} >
              Sign in
            </Button>
            <Button color='primary' variant='contained' size='small' sx={{ textTransform: 'none' }} >
              Sign up
            </Button>
          </Box>
          
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

