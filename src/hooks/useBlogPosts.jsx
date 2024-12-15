import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [selectedCategory, setSelectedCategory] = useState('All categories')
  // const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // データ取得開始時にローディングをtrueに設定
      const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error.message);  // エラーメッセージを出力
        setError(error.message); // エラーメッセージを設定
      } else {
        setPosts(data); // 取得したデータをpostsに格納
      }
      setLoading(false);
    };

    fetchPosts()
  }, [])

  return {
    posts,
    setPosts,
    loading,
    error,
  }
}