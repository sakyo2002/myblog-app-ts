import { useState } from 'react';
import { Box, Chip, FormControl, OutlinedInput, InputAdornment, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from 'react-router-dom';

const categories = [
  {id: 'all', label: 'Allcategories'},
  {id: 'company', label: 'Company'},
  {id: 'product', label: 'Product'},
  {id: 'design', label: 'Design'},
  {id: 'engineering', label: 'Engineering'},
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const initialFormData = {
    tag: '',
    title: '',
    description: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
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
          display: 'inline-flex',
          flexDirection: 'row',
          gap: 3,
          overflow: 'auto',
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category.id}
            onClick={handleCategoryClick}
            label={category.label}
            sx={{
              backgroundColor: selectedCategory === category.id ? 'primary.main' : 'transparent',
              color: selectedCategory === category.id ? 'white' : 'text.primary',
              border: 'none',
              '&hover': {
                backgroundColor: selectedCategory === category.id
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
          onClick={() => navigate('/')}
          sx={{ mr: 3 }}
          >
          投稿
        </Button>
      </Box>
    </Box>
  )
}