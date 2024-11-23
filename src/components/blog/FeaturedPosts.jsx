import { Grid, CardMedia, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';
import { Author } from './Author';


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
          <CardMedia
            component='img'
            alt={post.title}
            image={post.img}
            sx={{
              height: 400,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}
          />
          <StyledCardContent>
            <Typography variant='caption'>{post.tag}</Typography>
            <Typography variant='h6'>{post.title}</Typography>
            <StyledTypography variant='body2' color='text.secondary'>
              {post.description}
            </StyledTypography>
          </StyledCardContent>
          <Author authors={post.authors} />
        </StyledCard>
      </Grid>
    ))}
  </Grid>
  )
}