import { useState } from 'react';
import { Box, Chip, FormControl, OutlinedInput, InputAdornment, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const categories = [
  {id: 'all', tag: 'Allcategories'},
  {id: 'company', tag: 'Company'},
  {id: 'product', tag: 'Product'},
  {id: 'design', tag: 'Design'},
  {id: 'engineering', tag: 'Engineering'},
]


export function Search () {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' }}} variant='outlined'>
      <OutlinedInput
        size='small'
        sx={{ borderRadius: 5, flexGrow: 1 }}
        id='search'
        placeholder='Search…'
        startAdornment={
          <InputAdornment position='start' sx={{ color: 'text.primary' }}>
            <SearchIcon />
          </InputAdornment>
        }
        inputProps={{
          'arai-label': 'search',
        }}
      />
    </FormControl>
  )
}



export const BlogCategories = ({}) => {
  const [selectedTag, setSelectedTag] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (tagId) => {
    setSelectedTag(tagId)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        overflow: 'auto',
        my: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 3,
          overflow: 'auto',
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category.id}
            onClick={handleCategoryClick}
            label={category.tag}
            sx={{
              backgroundColor: selectedTag === category.id ? 'primary.main' : 'transparent',
              color: selectedTag === category.id ? 'white' : 'text.primary',
              border: 'none',
              '&hover': {
                backgroundColor: selectedTag === category.id
                ? 'primary.dark'
                : 'action.hover'
              },
            }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/new-post')}
          sx={{ mr: 3 }}
          >
          投稿
        </Button>
        <Search />
      </Box>
    </Box>
  )
}