import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { FeaturedPosts } from './FeaturedPosts';
import { RemainingPosts } from './RemainingPosts';
import { Latest } from './Latest';
import LoadingPage from '../../components/common/LoadingPage';

export const BlogMainContent: React.FC = () => {
  const { mainPosts, loading, error } = useBlogPosts()
  const [ focusedCardIndex, setFocusedCardIndex ] = useState<number | null>(null)

  const handleFocus = (index: number) => {
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
        <Latest />
      </Box>
    </Container>
  )

}