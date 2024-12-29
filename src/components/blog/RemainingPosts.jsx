import { Grid, Box, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';

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
          <StyledCardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[0]?.title}
            </Typography>
            <StyledTypography variant='body2' color='text.secondary' gutterBottom>
              {posts[0]?.description}
            </StyledTypography>
          </StyledCardContent>
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
              <Typography gutterBottom variant='h6' component='div'>
                {posts[1]?.title}
              </Typography>
              <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                {posts[1]?.description}
              </StyledTypography>
            </StyledCardContent>
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
              <Typography gutterBottom variant='h6' component='div'>
                {posts[2]?.title}
              </Typography>
              <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                {posts[2]?.description}
              </StyledTypography>
            </StyledCardContent>
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
          <StyledCardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[3]?.title}
            </Typography>
            <StyledTypography variant='body2' color='text.secondary' gutterBottom>
              {posts[3]?.description}
            </StyledTypography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};