import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import BlogPostsForm from "../components/post/PostForm/BlogPostsForm";
import LoadingPage from "../components/common/LoadingPage";
import type { Database } from "@/types/supabase";

// 投稿データの型定義
type Post = Database['public']['Tables']['posts']['Row'];

//エラーの型定義
interface ApiError {
  message: string;
}

export const EditPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [postData, setPostData] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', Number(postId))
        .single();
  
        if(error) {
          throw error
        }

        setPostData(data)
      } catch (error) {
        const apiError = error as ApiError;
        console.log('Error fetching post:', apiError.message);
        setError(apiError.message);
      } finally {
        setLoading(false)
      }
    };

    fetchPost()
  }, [postId])

  if (loading) return <LoadingPage />;
  if (error) return <div>エラーが発生しました: {error}</div>;
  if (!postData) return <div>投稿が見つかりません</div>;

  return (
    <BlogPostsForm
      initialValues={postData}
      isEdit={true}
    />
  )
}
