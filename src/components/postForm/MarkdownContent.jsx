import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

export default function MarkdownContent() {
  return (
    <Box
      sx={{
        p: 1,
        ml: 1,
        backgroundColor: 'white',
        border: '1px solid #c0c5c2',
        borderRadius: '5px',
        height: '100%',
      }}
    >
      <Typography variant='h7' sx={{ mb: 2 }}>
        文章を見やすく装飾する方法 Markdown記法チートシート
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Divider />

        <Box sx={{ display: 'flex-clumns', justifyContent: 'space-around', mt: 2, px: 2 }}>
          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              見出し
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', mb: 2, borderRadius: '5px' }}>
              <ListItem>
                <ListItemText primary='## 見出し2' />
              </ListItem>

              <ListItem>
                <ListItemText primary='### 見出し3' />
              </ListItem>

              <ListItem>
                <ListItemText primary='#### 見出し4' />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              コードブロック
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem>{` \`\`\`ruby:title.rb
      puts 'code block'
      \`\`\` `}</ListItem>
            </List>
          </Box>

          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              リンク
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem>
                    <ListItemText primary='[リンクテキスト](http://...)' />
              </ListItem>
            </List>
          </Box>

        </Box>

        <Box sx={{ display: 'flex-clumns', justifyContent: 'space-around', mt: 2, px: 2 }}>
          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              強調
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem>
                <ListItemText primary='**強調**' />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              インラインコード
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem>
                <ListItemText primary='`インラインコード`' />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ width: '150px' }}>
            <Typography variant='subtitle' sx={{ fontWeight: 'bold', mt: 2 }}>
              リスト
            </Typography>
            <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', mb: 2 }}>
              <ListItem>
                <ListItemText primary='- リスト１' />
              </ListItem>

              <ListItem>
                <ListItemText primary='1. 番号付きリスト1' />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
  </Box>
  )
}