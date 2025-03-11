import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BlogMainContent } from './pages/Home/index';
import { useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './pages/LoginPage';
import { SignUp } from './pages/SignUpPage';
import { Navigate } from 'react-router-dom';
import BlogPostsForm from './components/post/PostForm/BlogPostsForm';
import { PostDetail } from './pages/PostDetail';
import { EditPage } from './pages/EditPage';

// テーマの型定義
const theme = createTheme({
  palette: {
    background: {
      paper: '#f5f5f5',
    },
  },
});

//共通のPropsインターフェース
interface RouteProps {
  children: React.ReactNode;
}

//ProtectedRouteの型定義
const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if(loading) {
    return <div>Loading...</div>
  }
  if(!user) {
    return <Navigate to='/login' />
  }
  
  return <>{children}</>;
}

// PublicRouteの型定義
const PublicRoute: React.FC<RouteProps> = ({ children }) => {
  const { loading } = useAuth();

  if(loading) {
    return <div>Loading...</div>
  }
  
  return <>{children}</>;
}

// Layoutの型定義
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const location = useLocation();
  const isPostDetail = location.pathname.startsWith('/post/');
  const isNewPost = location.pathname === '/new-post'; // BlogPostsFormのパスを確認
  const isEditPost = location.pathname.startsWith('/post/edit/');
  const isAuthPage = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup');
  
  return (
    <Grid
      container
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        }}
    >
      { !(isNewPost || isEditPost || isAuthPage) && <Header /> }
      <Grid
        item
        sx={{
          flexGrow: 1,
          overflow: 'auto'
          }}
        >
          {children}
        </Grid>
      { !(isPostDetail || isNewPost || isAuthPage) && <Footer /> }
    </Grid>
  );
};

// Appコンポーネントの型定義
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
