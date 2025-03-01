import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function MarkdownContent({ isVisible }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: '50px',
        top: 0,
        width: '300px',
        height: '100%',
        p: 1,
        ml: 1,
        borderRight: '1px solid #c0c5c2',
        textAlign: 'center',
        // transition: 'opacity 0.5s ease-in-out, visibility 0.6s ease-in-out, transform 0.5s ease-in-out', // トランジションを追加
        opacity: isVisible ? 1 : 0, // 表示/非表示のトランジション
        visibility: isVisible ? 'visible' : 'hidden', // 表示/非表示のトランジション
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)', // 表示/非表示のトランジション
        // スライドイン時（isVisible: true）
        ...(isVisible && {
          transition: `
            opacity 0.5s ease-in-out,
            visibility 0.5s ease-in-out,
            transform 0.5s ease-in-out
          `
        }),
        // スライドアウト時（isVisible: false）
        ...(!isVisible && {
          transition: `
            opacity 0.18s ease-in-out,
            visibility 0.5s ease-in-out,
            transform 0.5s ease-in-out
          `
        })
      }}
    >
      <Box sx={{ margin: '16px 0 8px' }}>
        <Typography variant='h7'>
          Markdown記法チートシート
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
        <Box sx={{ display: 'flex-clumns', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              見出し
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', mb: 2, borderRadius: '5px' }}>
              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='## 見出し2'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>

              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='### 見出し3'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>

              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='#### 見出し4'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              コードブロック
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                >
                  {` \`\`\`ruby:title.rbputs 'code block'\`\`\` `}
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              リンク
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem sx={{ padding: '0 10px' }}>
                    <ListItemText
                      primary='[リンクテキスト](http://...)'
                      primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                    />
              </ListItem>
            </List>
          </Box>

        </Box>

        <Box sx={{ display: 'flex-clumns', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              強調
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='**強調**'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              インラインコード
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='`インラインコード`'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ width: '120px' }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 2 }}>
              リスト
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='- リスト１'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>

              <ListItem sx={{ padding: '0 10px' }}>
                <ListItemText
                  primary='1. 番号付きリスト1'
                  primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
  </Box>
  )
}