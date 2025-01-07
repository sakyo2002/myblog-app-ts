import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { Typography, Box, Divider } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import LoadingPage from "../common/LoadingPage";

// const markdown = `
// \`\`\`javascript
// console.log("Hello, World!");
// \`\`\`
// `;

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
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          p: '120px 40px 0'
        }}
    >
      <Box
        sx={{
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
          <Typography variant='body2' color='text.secondary'>
            投稿日: {new Date(selectedPost.date).toLocaleDateString('jp-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
          </Typography>
        </Box>

        <Divider />

        {/*投稿本文*/}
        <Box
          sx={{
            lineHeight: 1.8,
            fontSize: '1rem',
            color: '#333',
            '& h1, & h2, & h3': {
              margin: '1em 0',
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
          <ReactMarkdown
            children={selectedPost.description}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              code({ node, inline, className, children }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && !match ? (
                  <code
                    style={{
                      backgroundColor: '#f3f3f3',
                      padding: '2px 4px',
                      margin: '4px 2px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      width: 'fit-content',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      color: '#333',
                      fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
                      fontSize: '0.9em'
                    }}
                  >
                    {children}
                  </code>
                ) : (
                  <pre
                    style={{
                      backgroundColor: '#1e1e1e',
                      padding: '16px',
                      borderRadius: '6px',
                      overflow: 'auto',
                      whiteSpace: 'pre',
                      margin: '16px 0',
                      border: '1px solid #d0d7de',
                      fontSize: '0.875em'
                    }}
                  >
                    <code
                      style={{
                        display: 'block',
                        color: '#f5f5f5',
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
                        lineHeight: '1.45',
                        wordWrap: 'normal',
                        tabSize: 2,
                      }}
                    >
                      {children}
                    </code>
                  </pre>
                );
              },
            }}
          />
        </Box>

        <Divider />
      </Box>
    </Box>
  )
}