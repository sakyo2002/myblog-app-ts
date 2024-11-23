import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './components/Header'
import Footer from './components/Footer'
import BlogMainContent from './components/blog/MainContent';
import Latest from './components/latest'
import { BlogPostsForm } from './components/blog/BlogPostsForm';

const theme = createTheme({
  palette: {
    background: {
      paper: '#f5f5f5',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid container direction='column' sx={{ width: '100vw', height: '100vh' }}>
        <Grid item xs={12}>
        <Header />
        <BlogMainContent />
        <BlogPostsForm />
        <Latest />
        <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
