import { Grid, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export const FeaturedPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (postId) => {
    navigate(`/post/${postId}`);
  };
=======

export const FeaturedPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
    {posts.map((post, index) => (
      <Grid item xs={12} md={6} key={`featured-${index}`}>
        <StyledCard
          variant='outlined'
          onFocus={() => onFocus(index)}
          onBlur={onBlur}
          tabIndex={0}
          className={focusedCardIndex === index ? 'Mui-focused' : ' '}
<<<<<<< HEAD
          onClick={() => handleCardClick(post.id)}
        >
          <StyledCardContent>
            <Typography variant='body2' color='text.secondary'>
              {new Date(post.date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
=======
        >
          <StyledCardContent>
            <Typography variant='caption'>{post.tag}</Typography>
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
            <Typography variant='h6'>{post.title}</Typography>
            <StyledTypography variant='body2' color='text.secondary'>
              {post.description}
            </StyledTypography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    ))}
  </Grid>
  )
}