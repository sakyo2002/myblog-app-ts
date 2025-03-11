import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Database } from '@/types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

interface useBlogPostsProps {
  postId: string | undefined;
  mainPosts: Post[];
  latestPosts: Post[];
  loading: boolean;
  error: string | null;
  selectedPost: Post | null;
  fetchPostById: (postId: string) => void;
}

export const useBlogPosts = (): useBlogPostsProps => {
  const { postId } = useParams();
  const [mainPosts, setMainPosts] = useState<Post[]>([])
  const [latestPosts, setLatestPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

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
        if (error instanceof Error) {
          console.error('Error fetching posts:', error.message);
          setError(error.message);
        }
      }finally {
        setLoading(false);
      }
    };

    fetchAllPosts()
  }, [])

  const fetchPostById = async (postId: string) => {
    if (!postId) {
      console.error("Post ID is undefined");
      return;
    }
    setLoading(true); //ローディング開始
    const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', Number(postId)) //postIdに基づいてフィルタリング
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
    postId,
    mainPosts,
    latestPosts,
    loading,
    error,
    fetchPostById,
    selectedPost,
  }
}