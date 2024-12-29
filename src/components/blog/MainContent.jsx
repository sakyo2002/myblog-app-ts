import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { FeaturedPosts } from './FeaturedPosts';
<<<<<<< HEAD
import { RemainingPosts } from './RemainingPosts';
import BlogHeader from './BlogHeader';
import BlogActions from './BlogActions';
=======
import { RemainingPosts } from './RemainingPosts.jsx';
import { BlogCategories } from './Blogcategories';
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
import LoadingPage from '../common/LoadingPage';

export default function BlogMainContent() {
  const { posts, loading, error } = useBlogPosts()
  const [focusedCardIndex, setFocusedCardIndex] = useState(null)

  const handleFocus = (index) => {
    setFocusedCardIndex(index)
  }

  const handleBlur = () => {
    setFocusedCardIndex(null)
  }

  if (loading) {
    return <LoadingPage />
  }

  if (error) return <div>{error}</div>

  const displayedPosts = posts.slice(0, 6)

  return (
    <Container maxWidth='xl' sx={{ mt: 12 }}>
      <Box sx={{ p: 3 }}>
<<<<<<< HEAD
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <BlogHeader />
          <BlogActions />
        </Box>
=======
        <Typography variant='h3' gutterBottom>
          Blog
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Stay in the loop with the latest about our products
        </Typography>
        <BlogCategories />
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
        <FeaturedPosts
          posts={displayedPosts.slice(0, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
          />
        <RemainingPosts
          posts={displayedPosts.slice(2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
          />
      </Box>
    </Container>
  )

}