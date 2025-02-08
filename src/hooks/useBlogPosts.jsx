import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useBlogPosts = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [latestPosts, setLatestPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  // const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true); // データ取得開始時にローディングをtrueに設定
      try {
        //メイン
        const { data: mainData, error: mainError } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false })
        .limit(6)

        if (mainError) throw mainError;

        //Latest
        const { data: latestData, error: latestError } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false })
        .range(6, 15);

        if (latestError) throw latestError;

        setMainPosts(mainData)
        setLatestPosts(latestData)
        
      } catch (error) {
        console.error('Error fetching posts:', error.message);
        setError(error.message);
      }finally {
        setLoading(false);
      }
    };

    fetchAllPosts()
  }, [])

  const fetchPostById = async (postId) => {
    if (!postId) {
      console.error("Post ID is undefined", error);
      return;
    }
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
    mainPosts,
    latestPosts,
    loading,
    error,
    fetchPostById,
    selectedPost,
  }
}