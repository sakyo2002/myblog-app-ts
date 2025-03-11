import Grid from '@mui/material/Grid';
import { Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { StyledCard, StyledCardContent } from '../../styles/components/CardComponents';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { MarkdownRenderer } from '../../hooks/MarkdownRenderer';
import { useNavigate } from 'react-router-dom';

export const Latest: React.FC = () => {
  const navigate = useNavigate();
  const { latestPosts } = useBlogPosts();

  const handleClick = (postId: number) => {
    navigate(`/post/${postId}`);
  }

  return (
    <Box sx={{ margin: '24px 0' }}>
      <Typography
        sx={{ p: 1 }}
        variant='h4'
      >
        Latest
      </Typography>
      <Grid container spacing={1.5} >
        {latestPosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <StyledCard  onClick={() => handleClick(post.id)}>
              <StyledCardContent sx={{ border: '1px solid #dcdcdc', borderRadius: '12px', backgroundColor: '#fff' }}>
                <Typography>
                  {post.title}
                </Typography>
                <Divider />
                <MarkdownRenderer
                  content={post.description}
                  preview={true}
                  maxLength={90}
                />
                <Typography variant='body2'>
                  {new Date(post.date).toLocaleDateString('jp-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}