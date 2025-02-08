import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogMainContent from './components/blog/BlogMainContent';
import { useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Navigate } from 'react-router-dom';
import BlogPostsForm from './components/postForm/BlogPostsForm';
import PostDetail from './components/blog/PostDetail';
import EditPage from './components/common/EditPage';

const theme = createTheme({
  palette: {
    background: {
      paper: '#f5f5f5',
    },
  },
});

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if(loading) {
    return <div>Loading...</div>
  }
  if(!user) {
    return <Navigate to='/login' />
  }

  return children;
}

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if(loading) {
    return <div>Loading...</div>
  }

  return children;
}

function Layout ({ children }) {
  const location = useLocation();
  const isPostDetail = location.pathname.startsWith('/post/');
  const isNewPost = location.pathname === '/new-post'; // BlogPostsFormのパスを確認
  const isEditPost = location.pathname.startsWith('/post/edit/');
  const isAuthPage = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup');

  return (
    <Grid container sx={{ width: '100vw', height: '100vh', display: 'flex-columns' }}>
      { !(isNewPost || isEditPost || isAuthPage) && <Header /> }
      <Grid item sx={{ flexGrow: 1, overFlow: 'auto' }} >{children}</Grid>
      { !(isPostDetail || isNewPost || isAuthPage) && <Footer /> }
    </Grid>
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route
              path='/'
              element={
                <Layout>
                  <ProtectedRoute>
                    <BlogMainContent />
                  </ProtectedRoute>
                </Layout>
              }
            />
            <Route
              path='/login'
              element={
                <Layout>
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                </Layout>
              }
            />
            <Route
              path='/signup'
              element={
                <Layout>
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                </Layout>
              }
            />
            <Route
              path='/post/:postId'
              element={
                <Layout>
                  <ProtectedRoute>
                    <PostDetail />
                  </ProtectedRoute>
                </Layout>
              }
            />
            {/* Protected Routes */}
            <Route
              path='/new-post'
              element={
                <Layout>
                  <ProtectedRoute>
                    <BlogPostsForm />
                  </ProtectedRoute>
                </Layout>
              }
            />
            <Route
              path='/post/edit/:postId'
              element={
                <Layout>
                  <ProtectedRoute>
                    <EditPage />
                  </ProtectedRoute>
                </Layout>
              }
            />
            {/* Catch all route - リダイレクト */}
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
