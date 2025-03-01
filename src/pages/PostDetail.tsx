import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { Typography, Box, Divider } from "@mui/material";
import { MarkdownRenderer } from "../hooks/MarkdownRenderer";
import LoadingPage from "../components/common/LoadingPage";
import SideBar from "../components/post/PostSideBar";
import { Toc } from './Tocbot';



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
      sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          p: '120px 40px 0',
        }}
    >
      {/*サイドバー */}
      <Box>
        <SideBar postId={postId} />
      </Box>

      {/*メインコンテンツ*/}
      <Box
        sx={{
          width: '75%',
          backgroundColor: '#fff',
          borderRadius: '8px',
          p: 3,
        }}
      >
        {/*投稿ヘッダー*/}
        <Box>
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {selectedPost.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ display: 'inline-block' }}>
            投稿日: {new Date(selectedPost.date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            <Divider />
          </Typography>
        </Box>


        {/*投稿本文*/}
        <Box
          className="content" // コンテンツ用のクラスを追加
          sx={{
            position: 'relative',
            lineHeight: 1.8,
            fontSize: '1rem',
            color: '#333',
            '& h2, & h3': {
              margin: '1em 0',
              position: 'relative',
            },
            '& ul': {
              paddingLeft: '20px',
              margin: '1em 0',
            },
            '& li': {
              listStyleType: 'disc',
              margin: '0.5rm 0',
            },
            '& table': {
              borderCollapse: 'collapse',
              width: '100%',
            },
            '& th, td': {
              border: '1px solid #ddd',
              padding: '8px',
              textAlign: 'center',
            },
            '& th': {
              backgroundColor: '#f4f4f4',
            },
          }}
        >
          
        <MarkdownRenderer content={selectedPost.description} />
        </Box>
      </Box>

      {/* 目次 */}
      <Box
        sx={{
          width: "25%",
          paddingLeft: '16px',
          backgroundColor: "#f5f5f5",
          borderLeft: "1px solid #ddd",
        }}
      >
        <Toc />
      </Box>

    </Box>
  )
}