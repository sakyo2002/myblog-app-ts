import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
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

  const fetchPostById = async (postId) => {
<<<<<<< HEAD
    if (!postId) {
      console.error("Post ID is undefined", error);
      return;
    }
=======
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
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

  return {
    posts,
    setPosts,
    loading,
    error,
    fetchPostById,
    selectedPost,
  }
}