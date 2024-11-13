import { useState } from 'react';
// import { Search } from 'lucide-react';

const categories = [
  {id: 'all', label: 'Allcategories'},
  {id: 'company', label: 'Company'},
  {id: 'product', label: 'Product'},
  {id: 'design', label: 'Design'},
  {id: 'engineering', label: 'Engineering'},
]

const handleCategoryClick = (categoryId) => {
  setSelectedCategories(categoryId)
}



export const BlogCategories = ({}) => {
  const [selectedCategories, setSelectedCategories] = useState('all');
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}