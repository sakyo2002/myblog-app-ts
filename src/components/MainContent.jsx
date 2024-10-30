import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  AvatarGroup,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/4.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/6.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=5',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/1.jpg' }],
  },
]

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}))

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
})

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirectioin: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant='caption'>
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant='caption'>Oct 22, 2024</Typography>
    </Box>
  )

  Author.propTypes = {
    authors: PropTypes.arryOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }
}

export default function BlogMainContent() {
  const [ focusedCardIndex, setFocusedCardIndex ] = useState('');

const handleFocus = (index) => {
  setFocusedCardIndex(index)
};

const handleBlur = () => {
  setFocusedCardIndex(null)
};

const handleClick = () => {
  console.info('You clicked the filter chip.')
};

  return (
    <Container maxWidth='xl' sx={{ mt: 12 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant='h3' gutterBottom>
          Blog
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Stay in the loop with the latest about our products
        </Typography>

        <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            {['All categories', 'Engineering', 'Product', 'Design'].map((category) => (
              <Chip key={category} label={category} onClick={() => {}} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size='small'
              variant='outlined'
              placeholder='Search...'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
            <IconButton size='small' sx={{ ml: 1 }}>
              <RssFeedIcon />
            </IconButton>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(0)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 0 ? 'Mui-focused' : ' '}
              >
                <CardMedia
                  component='img'
                  alt='green igana'
                  image={cardData[0].img}
                  aspect-ratio='16 / 9'
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant='caption' component='div'>
                    {cardData[0].tag}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    {cardData[0].title}
                  </Typography>
                  <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                    {cardData[0].description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={cardData[1].authors} />
              </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(1)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 1 ? 'Mui-focused' : ' '}
              >
                <CardMedia
                  component='img'
                  alt='green igana'
                  image={cardData[1].img}
                  aspect-ratio='16 / 9'
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant='caption' component='div'>
                    {cardData[1].tag}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    {cardData[1].title}
                  </Typography>
                  <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                    {cardData[1].description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={cardData[1].authors} />
              </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(2)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 2 ? 'Mui-focused' : ' '}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component='img'
                  alt='green igana'
                  image={cardData[2].img}
                  sx={{
                    height: {sm: 'auto', md: '50%' },
                    aspectRatio: { sm: '16 / 9', md: '' },
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant='caption' component='div'>
                    {cardData[2].tag}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    {cardData[2].title}
                  </Typography>
                  <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                    {cardData[2].description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={cardData[2].authors} />
              </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
            >
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(3)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 3 ? 'Mui-focused' : ' '}
                sx={{ height: '100%' }}
              >
                <StyledCardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <div>
                    <Typography gutterBottom variant='caption' component='div'>
                      {cardData[3].tag}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                      {cardData[3].title}
                    </Typography>
                    <StyledTypography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      >
                      {cardData[3].description}
                    </StyledTypography>
                  </div>
                </StyledCardContent>
                <Author authors={cardData[3].authors} />
              </StyledCard>
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(4)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 4 ? 'Mui-focused' : ' '}
                sx={{ height: '100%' }}
              >
                <StyledCardContent>
                  <Typography gutterBottom variant='caption' component='div'>
                    {cardData[4].tag}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    {cardData[4].title}
                  </Typography>
                  <StyledTypography
                    variant='body2'
                    color='text.secondary'
                    gutterBottom
                  >
                    {cardData[4].description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={cardData[4].authors} />
              </StyledCard>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <StyledCard
                variant='outlined'
                onFocus={() => handleFocus(0)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 5 ? 'Mui-focused' : ' '}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component='img'
                  alt='green igana'
                  image={cardData[5].img}
                  aspect-ratio='16 / 9'
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant='caption' component='div'>
                    {cardData[5].tag}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    {cardData[5].title}
                  </Typography>
                  <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                    {cardData[5].description}
                  </StyledTypography>
                </StyledCardContent>
                <Author authors={cardData[5].authors} />
              </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}