import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
<<<<<<< HEAD
  const [selectedPost, setSelectedPost] = useState(null)
=======
  // const [selectedCategory, setSelectedCategory] = useState('All categories')
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
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

<<<<<<< HEAD
  const fetchPostById = async (postId) => {
    setLoading(true); //ローディング開始
    const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', postId) //postIdに基づいてフィルタリング
    .single(); //単一の投稿を取得

    if (error) {
      console.error('Error fetching post', error.message)
      setError(error.message);
    } else {
      setSelectedPost(data); //取得した投稿を設定
    }
    setLoading(false); //ローディング終了
  }

=======
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
  return {
    posts,
    setPosts,
    loading,
    error,
<<<<<<< HEAD
    fetchPostById,
    selectedPost,
=======
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
  }
}