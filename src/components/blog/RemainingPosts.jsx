import { Grid, Box, CardMedia, Typography } from '@mui/material';
import { StyledCard } from '../styled/CardComponents';
import { StyledCardContent } from '../styled/CardComponents';
import { StyledTypography } from '../styled/CardComponents';
import { Author } from './Author';

export const RemainingPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <StyledCard
          variant='outlined'
          sx={{ height: '100%' }}
          onFocus={() => onFocus(2)}
          onBlur={onBlur}
          tabIndex={0}
          className={focusedCardIndex === 2 ? 'Mui-focused' : ' '}
        >
          <CardMedia
            component='img'
            alt={posts[0].title}
            image={posts[0].img}
            sx={{
              height: {sm: 'auto', md: '50%'},
              aspectRatio: { sm: '16 / 9', md: ''},
            }}
          />
          <StyledCardContent>
            <div>
              <Typography gutterBottom variant='caption' component='div'>
                {posts[0].tag}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[0].title}
              </Typography>
              <StyledTypography
                variant='body2'
                color='text.secondary'
                gutterBottom
                >
                {posts[0].description}
              </StyledTypography>
            </div>
          </StyledCardContent>
          <Author authors={posts[0].authors} />
        </StyledCard>
      </Grid>

    <Grid item xs={12} md={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
        {posts.slice(1, 3).map((post, index) => (
          <StyledCard
            key={`stacked-${index}`}
            variant='outlined'
            sx={{ height: '100%' }}
            onFocus={() => onFocus(index + 1)}
            onBlur={onBlur}
            tabIndex={0}
            className={focusedCardIndex === index + 1 ? 'Mui-focused' : ' '}
          >
            <StyledCardContent>
              <div>
                <Typography gutterBottom variant='caption' component='div'>
                  {post.tag}
                </Typography>
                <Typography gutterBottom variant='h6' component='div'>
                  {post.title}
                </Typography>
                <StyledTypography
                  variant='body2'
                  color='text.secondary'
                  gutterBottom
                  >
                  {post.description}
                </StyledTypography>
              </div>
            </StyledCardContent>
            <Author authors={post.authors} />
          </StyledCard>
        ))}
      </Box>
    </Grid>

    <Grid item xs={12} md={4}>
        <StyledCard
          variant='outlined'
          sx={{ height: '100%' }}
          onFocus={() => onFocus(3)}
          onBlur={onBlur}
          tabIndex={0}
          className={focusedCardIndex === 3 ? 'Mui-focused' : ' '}
        >
          <CardMedia
            component='img'
            alt={posts[3].title}
            image={posts[3].img}
            sx={{
              height: { sm: 'auto', md: '50%' },
              aspectRatio: { sm: '16 / 9', md: '' }
            }}
          />
          <StyledCardContent>
            <div>
              <Typography gutterBottom variant='caption' component='div'>
                {posts[3].tag}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[3].title}
              </Typography>
              <StyledTypography
                variant='body2'
                color='text.secondary'
                gutterBottom
                >
                {posts[3].description}
              </StyledTypography>
            </div>
          </StyledCardContent>
          <Author authors={posts[3].authors} />
        </StyledCard>
    </Grid>
  </Grid>
  )
}