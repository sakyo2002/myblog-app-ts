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
    description: 'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Erica Johns', avatar: 'https://mui.com/static/images/avatar/4.jpg' }],
  },
]

const BlogCard = ({ card }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component='img'
      height='140'
      image={card.img}
      alt={card.title}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant='overline' color='primary' >
        {card.tag}
      </Typography>
      <Typography gutterBottom variant='h5' component='div'>
        {card.title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {card.description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <AvatarGroup max={3}>
        {card.authors.map((author, index) => (
          <Avatar key={index} alt={author.name} src={author.avatar} />
        ))}
      </AvatarGroup>
      <Typography variant='caption' color='text.secondary'>
        {card.authors.map(a => a.name).join(', ')}
      </Typography>
    </Box>
  </Card>
)

export default function BlogMainContent() {
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <Container maxWidth='xl' sx={{ mt: 22 }}>
    <Box sx={{ p: 3 }}>
      <Typography variant='h2' gutterBottom>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
      <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <BlogCard card={card} />
            </Grid>
          ))}
      </Grid>

    </Box>
    </Container>
  )
}