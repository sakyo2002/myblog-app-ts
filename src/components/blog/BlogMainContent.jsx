import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { FeaturedPosts } from './FeaturedPosts';
import { RemainingPosts } from './RemainingPosts';
import Latest from '../latest';
import LoadingPage from '../common/LoadingPage';

export default function BlogMainContent() {
  const { mainPosts, latestPosts, loading, error } = useBlogPosts()
  const [ focusedCardIndex, setFocusedCardIndex ] = useState(null)

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

  return (
    <Container maxWidth='xl' sx={{ mt: 12 }}>
      <Box sx={{ p: 3 }}>
        <FeaturedPosts
          posts={mainPosts.slice(0, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
        />
        <RemainingPosts
          posts={mainPosts.slice(2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusedCardIndex={focusedCardIndex}
        />
        <Latest post={latestPosts} />
      </Box>
    </Container>
  )

}