import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import BlogPostsForm from "../components/post/PostForm/BlogPostsForm";
import LoadingPage from "../components/common/LoadingPage";

export default function EditPage() {
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .single();
  
        if(error) {
          throw error
        }

        setPostData(data)
      } catch (error) {
        console.log('Error fetching post:', error.message);
        setError(error.message);
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
