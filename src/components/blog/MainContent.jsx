import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { FeaturedPosts } from './FeaturedPosts';
import { RemainingPosts } from './remainingPosts';
import { BlogCategories } from './Blogcategories';

export default function BlogMainContent() {
  const { posts, loading, error } = useBlogPosts()
  const [focusedCardIndex, setFocusedCardIndex] = useState(null)

  const handleFocus = (index) => {
    setFocusedCardIndex(index)
  }

  const handleBlur = () => {
    setFocusedCardIndex(null)
  }

  if (loading) return <div>読み込み中...</div>
  if (error) return <div>{error}</div>

  return (
    <Container maxWidth='xl' sx={{ mt: 12 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant='h3' gutterBottom>
          Blog
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Stay in the loop with the latest about our products
        </Typography>
        <BlogCategories />
        <FeaturedPosts
          posts={posts.slice(0, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
          />
        <RemainingPosts
          posts={posts.slice(2, 6)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
          />
      </Box>
    </Container>
  )

}