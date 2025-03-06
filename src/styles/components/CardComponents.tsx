import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

// カード全体のスタイル
export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: theme.palette.primary.main,
    outlineOffset: '2px',
  },
}))

// カードコンテンツ部分のスタイル
export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '16px',
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: '16px',
  },
})

// 記事説明文用の省略可能なTypography
export const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

// タグ用のスタイル
export const StyledTag = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.875rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}))

// 日付用のスタイル
export const StyledDate = styled(Typography)({
  fontSize: '0.875rem',
  color: 'text.secondary',
  marginLeft: 'auto',
})