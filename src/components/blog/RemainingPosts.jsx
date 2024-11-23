import { Grid, Box, CardMedia, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';
import { Author } from './Author';

export const RemainingPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  if (!posts || posts.length === 0) return <div>No posts available</div>;

  return (
    <Grid container spacing={2}>
      {/* 1カラム目 */}
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
            alt={posts[0]?.title}
            image={posts[0]?.img}
            sx={{
              height: { sm: 'auto', md: '50%' },
              aspectRatio: { sm: '16 / 9', md: '' },
            }}
          />
          <StyledCardContent>
            <Typography gutterBottom variant='caption' component='div'>
              {posts[0]?.tag}
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[0]?.title}
            </Typography>
            <StyledTypography variant='body2' color='text.secondary' gutterBottom>
              {posts[0]?.description}
            </StyledTypography>
          </StyledCardContent>
          {posts[0]?.authors && <Author authors={posts[0].authors} />}
        </StyledCard>
      </Grid>

      {/* 2カラム目（縦に2つのカード） */}
      <Grid item xs={12} md={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* 1つ目のカード（文字のみ） */}
          <StyledCard
            variant='outlined'
            sx={{ height: '100%' }}
            onFocus={() => onFocus(3)}
            onBlur={onBlur}
            tabIndex={0}
            className={focusedCardIndex === 3 ? 'Mui-focused' : ' '}
          >
            <StyledCardContent>
              <Typography gutterBottom variant='caption' component='div'>
                {posts[1]?.tag}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[1]?.title}
              </Typography>
              <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                {posts[1]?.description}
              </StyledTypography>
            </StyledCardContent>
            {posts[1]?.authors && <Author authors={posts[1].authors} />}
          </StyledCard>

          {/* 2つ目のカード（文字のみ） */}
          <StyledCard
            variant='outlined'
            sx={{ height: '100%' }}
            onFocus={() => onFocus(4)}
            onBlur={onBlur}
            tabIndex={0}
            className={focusedCardIndex === 4 ? 'Mui-focused' : ' '}
          >
            <StyledCardContent>
              <Typography gutterBottom variant='caption' component='div'>
                {posts[2]?.tag}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[2]?.title}
              </Typography>
              <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                {posts[2]?.description}
              </StyledTypography>
            </StyledCardContent>
            {posts[2]?.authors && <Author authors={posts[2].authors} />}
          </StyledCard>
        </Box>
      </Grid>

      {/* 3カラム目 */}
      <Grid item xs={12} md={4}>
        <StyledCard
          variant='outlined'
          sx={{ height: '100%' }}
          onFocus={() => onFocus(5)}
          onBlur={onBlur}
          tabIndex={0}
          className={focusedCardIndex === 5 ? 'Mui-focused' : ' '}
        >
          <CardMedia
            component='img'
            alt={posts[3]?.title}
            image={posts[3]?.img}
            sx={{
              height: { sm: 'auto', md: '50%' },
              aspectRatio: { sm: '16 / 9', md: '' },
            }}
          />
          <StyledCardContent>
            <Typography gutterBottom variant='caption' component='div'>
              {posts[3]?.tag}
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[3]?.title}
            </Typography>
            <StyledTypography variant='body2' color='text.secondary' gutterBottom>
              {posts[3]?.description}
            </StyledTypography>
          </StyledCardContent>
          {posts[3]?.authors && <Author authors={posts[3].authors} />}
        </StyledCard>
      </Grid>
    </Grid>
  );
};