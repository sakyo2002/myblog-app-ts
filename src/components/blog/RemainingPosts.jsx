import { Grid, Box, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// ランダムな画像URLを生成する関数
const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * 1000); // 0～999のランダムな数字を生成
  return `https://picsum.photos/800/450?random=${randomIndex}`;
};

export const RemainingPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (postId) => {
    navigate(`/post/${postId}`);
  };

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
          onClick={() => handleCardClick(posts[0].id)}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={getRandomImageUrl()}
            sx={{
              aspectRatio: '16 / 9',
              height: '150px',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <StyledCardContent>
            <Typography variant='body2' color='text.secondary'>
              {new Date(posts[0].date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
          {/* 1つ目のカード（文字のみ） */}
          <StyledCard
            variant='outlined'
            sx={{ height: '100%' }}
            onFocus={() => onFocus(3)}
            onBlur={onBlur}
            tabIndex={0}
            className={focusedCardIndex === 3 ? 'Mui-focused' : ' '}
            onClick={() => handleCardClick(posts[1].id)}
          >
            <StyledCardContent>
              <Typography variant='body2' color='text.secondary'>
                {new Date(posts[1].date).toLocaleDateString('jp-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </Typography>
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
            onClick={() => handleCardClick(posts[2].id)}
          >
            <StyledCardContent>
              <Typography variant='body2' color='text.secondary'>
                {new Date(posts[2].date).toLocaleDateString('jp-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </Typography>
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
          onClick={() => handleCardClick(posts[3].id)}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={getRandomImageUrl()}
            sx={{
              aspectRatio: '16 / 9',
              height: '160px',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <StyledCardContent>
            <Typography variant='body2' color='text.secondary'>
              {new Date(posts[3].date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
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