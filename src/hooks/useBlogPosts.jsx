import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [selectedCategory, setSelectedCategory] = useState('All categories')
  // const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    //実際のAPIが実装されるまではモックデータを使用する
    const fetchPosts = async () => {
      const { data, error } = await supabase
      .from('posts')
      .select('*');

      if (error) {
        setError(error.message);
      } else {
        console.log(data)
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
  }
}