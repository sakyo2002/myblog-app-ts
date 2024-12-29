import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { Typography, Box } from "@mui/material";
import LoadingPage from "../common/LoadingPage";

export default function PostDetail() {
  const { postId } = useParams();
  const { fetchPostById, selectedPost, loading, error } = useBlogPosts();

  useEffect(() => {
    fetchPostById(postId);
  }, [postId]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <Typography variant='h6'>エラー: {error}</Typography>;
  }

  if (!selectedPost) {
    return <Typography variant='h6'>記事が見つかりませんでした。</Typography>
  }

  return (
    <Box
      fullWidth
      sx={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}
    >
      <Typography variant='h4'>{selectedPost.title}</Typography>
      <Typography variant='body1'>{selectedPost.description}</Typography>
    </Box>
  )
}