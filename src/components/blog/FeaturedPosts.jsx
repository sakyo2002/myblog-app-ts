import { Grid, Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledTypography } from '../styled/CardComponents';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// ランダムな画像URLを生成する関数
const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * 1000); // 0～999のランダムな数字を生成
  return `https://picsum.photos/800/450?random=${randomIndex}`;
};

export const FeaturedPosts = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (postId) => {
    navigate(`/post/${postId}`);
  };

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
          onClick={() => handleCardClick(post.id)}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={getRandomImageUrl()}
            sx={{
              aspectRatio: '16 / 9',
              height: '210px',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <StyledCardContent>
            <Typography variant='body2' color='text.secondary'>
              {new Date(post.date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
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