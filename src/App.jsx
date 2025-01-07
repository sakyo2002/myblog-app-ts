import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogMainContent from './components/blog/BlogMainContent';
import Latest from './components/latest';
import BlogPostsForm from './components/postForm/BlogPostsForm';
import PostDetail from './components/blog/PostDetail';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: {
      paper: '#f5f5f5',
    },
  },
});

function Layout ({ children }) {
  const location = useLocation();
  const isPostDetail = location.pathname.startsWith('/post/');
  const isNewPost = location.pathname === '/new-post'; // BlogPostsFormのパスを確認

  return (
    <Grid container sx={{ width: '100vw', height: '100vh', display: 'flex-columns' }}>
      { !isNewPost && <Header /> }
      <Grid item sx={{ flexGrow: 1, overFlow: 'auto' }} >{children}</Grid>
      { !(isPostDetail || isNewPost) && <Footer /> }
    </Grid>
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<>
                <BlogMainContent />
                <Latest />
              </>} />
              <Route path='/new-post' element={<BlogPostsForm />} />
              <Route path='/post/:postId' element={<PostDetail />} />
            </Routes>
          </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
