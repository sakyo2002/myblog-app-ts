import Grid from '@mui/material/Grid';
import Header from './components/Header'
import Footer from './components/Footer'
import BlogMainContent from './components/MainContent'
import Latest from './components/latest'

function App() {
  return (
    <Grid container direction='column' sx={{ width: '100vw', height: '100vh' }}>
      <Grid item xs={12}>
      <Header />
      <BlogMainContent />
      <Latest />
      <Footer />
      </Grid>
    </Grid>
  )
}

export default App
