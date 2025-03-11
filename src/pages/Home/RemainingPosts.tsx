import { Grid, Box, Typography, Divider } from '@mui/material';
import { StyledCard, StyledCardContent } from '../../styles/components/CardComponents';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MarkdownRenderer } from '../../hooks/MarkdownRenderer';
import { Database } from '@/types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

interface RemainingPostsProps {
  posts: Post[];
  onFocus: (index: number) => void;
  onBlur: (index: number) => void;
  focusedCardIndex: number | null;
}

// ランダムな画像URLを生成する関数
const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * 1000); // 0～999のランダムな数字を生成
  return `https://picsum.photos/800/450?random=${randomIndex}`;
};

export const RemainingPosts: React.FC<RemainingPostsProps> = ({ posts, onFocus, onBlur, focusedCardIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (postId: number) => {
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
          onBlur={() => onBlur(2)}
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
              height: '250px',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <StyledCardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[0]?.title}
            </Typography>
            <Divider />
            <MarkdownRenderer
              content={posts[0].description}
              preview={true}
              maxLength={80}
            />
            <Typography variant='body2'>
              {new Date(posts[0].date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
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
            onBlur={() => onBlur(3)}
            tabIndex={0}
            className={focusedCardIndex === 3 ? 'Mui-focused' : ' '}
            onClick={() => handleCardClick(posts[1].id)}
          >
            <StyledCardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[1]?.title}
              </Typography>
              <Divider />
              <MarkdownRenderer
                content={posts[1].description}
                preview={true}
                maxLength={140}
              />
              <Typography variant='body2'>
                {new Date(posts[1].date).toLocaleDateString('jp-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </Typography>
            </StyledCardContent>
          </StyledCard>

          {/* 2つ目のカード（文字のみ） */}
          <StyledCard
            variant='outlined'
            sx={{ height: '100%' }}
            onFocus={() => onFocus(4)}
            onBlur={() => onBlur(4)}
            tabIndex={0}
            className={focusedCardIndex === 4 ? 'Mui-focused' : ' '}
            onClick={() => handleCardClick(posts[2].id)}
          >
            <StyledCardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {posts[2]?.title}
              </Typography>
              <Divider />
              <MarkdownRenderer
                content={posts[2].description}
                preview={true}
                maxLength={140}
              />
              <Typography variant='body2'>
                {new Date(posts[2].date).toLocaleDateString('jp-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </Typography>
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
          onBlur={() => onBlur(5)}
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
              height: '250px',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <StyledCardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {posts[3]?.title}
            </Typography>
            <Divider />
            <MarkdownRenderer
              content={posts[3].description}
              preview={true}
              maxLength={80}
            />
            <Typography variant='body2'>
              {new Date(posts[3].date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};