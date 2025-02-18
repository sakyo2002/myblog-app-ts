import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './components/layout/Header';
import Footer from './pages/ Home/Footer';
import BlogMainContent from './pages/ Home/index';
import { useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './pages/LoginPage';
import { SignUp } from './pages/SignUpPage';
import { Navigate } from 'react-router-dom';
import BlogPostsForm from './components/layout/post/PostForm/BlogPostsForm';
import PostDetail from './pages/PostDetail';
import EditPage from './pages/EditPage';

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
