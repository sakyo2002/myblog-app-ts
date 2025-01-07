import React from "react";
import { Box, Chip } from "@mui/material";

const categories = [
  {id: 'all', tag: 'Allcategories'},
  {id: 'company', tag: 'Company'},
  {id: 'product', tag: 'Product'},
  {id: 'design', tag: 'Design'},
  {id: 'engineering', tag: 'Engineering'},
]

export default function PostTags({ value, onChange }) {
  const handleTagClick = (tagId) => {
    onChange((prevSelected) => {
      if (prevSelected.includes(tagId)) {
        return prevSelected.filter((id) => id !== tagId);
      } else {
        return [...prevSelected, tagId]
      }
    });
  };

  return (
    <Box
      sx={{
        p: 2,
        mb: 1,
        backgroundColor: 'white',
        border: '1px solid #c0c5c2',
        borderRadius: '5px',
      }}
      >
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.tag}
          onClick={() => handleTagClick(category.tag)}
          color={value.includes(category.tag) ? 'primary' : 'default'}
          variant={value.includes(category.tag) ? 'filled' : 'outlined'}
          sx={{ mr: 1 }}
        />
      ))}
    </Box>
  )
}