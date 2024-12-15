import { Grid, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';

export const FeaturedPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {

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
        >
          <StyledCardContent>
            <Typography variant='caption'>{post.tag}</Typography>
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