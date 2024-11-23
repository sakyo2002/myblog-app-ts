import { useState } from 'react';
import { Box, Chip, FormControl, OutlinedInput, InputAdornment, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { BlogPostsForm } from './BlogPostsForm';

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
  const [isFormOpen, setIsFormOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  console.log('isFormOpen:', isFormOpen); // 状態の確認

  
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

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
          onClick={handleOpenForm}
          sx={{ mr: 3 }}
          >
          投稿
        </Button>
        <BlogPostsForm open={isFormOpen} onClose={handleCloseForm} />
        <Search/>
      </Box>
    </Box>
  )
}