import React, { useState, useEffect, useRef } from "react";
import {
  InputAdornment,
  Popover,
  TextField,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { MarkdownRenderer } from "../../../hooks/MarkdownRenderer";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../utils/supabaseClient'

export default function SearchBar() {
  const navigate = useNavigate();
  const searchIconRef = useRef(null);  // SearchIconのref
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Popoverの開閉状態
  const isOpen = Boolean(anchorEl);

  // 検索処理
  const performSearch = async (query)=> {
    console.log('検索クエリ:', query); // 検索クエリの確認

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      console.log('検索クエリ実行:', query); // デバッグログ
      const { data, error } = await supabase
      .from('posts')
      .select('id, title, description')
      .ilike('description', `%${query}%`)
      .order('date', { ascending: false })
      .limit(10);

      console.log('検索結果:', data); // 検索結果の確認
      console.log('エラー:', error); // エラーの確認

      if (error) throw error;
      setSearchResults(data || []);
    } catch (error) {
      console.error('検索中にエラーが発生しました:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isOpen) {
        performSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery])

  // 検索アイコンクリック時の処理
  const handleSearchClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Popoverを閉じる処理
  const handleClose = ()=> {
    setAnchorEl(null);
    setSearchQuery(''); // 検索をリセット
    setSearchResults([]); // 結果をクリア
  }

  // 入力値変更時の処理
  const handleSearchChange = (event)=> {
    setSearchQuery(event.target.value);
  }

  return (
    <Box component='div' sx={{ display: 'inline-block' }}>
      <InputAdornment sx={{ color: 'text.primary' }}>
        <SearchIcon
          ref={searchIconRef}
          fontSize="small"
          onClick={handleSearchClick}
          sx={{ cursor: 'pointer' }}
        />
      </InputAdornment>

      <Popover
        open={isOpen}
        anchorReference="none"
        onClose={handleClose}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        sx={{
          '& .MuiPopover-paper': {
            width: '800px',
            height: '700px',
            overflow: 'auto',
            textAlign: 'center',
          },
        }}
      >
        <Box sx={{ p: 2}}>
          <TextField
            fullWidth
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="検索..."
            sx={{ width: '400px' }}
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    fontSize="small"
                    sx={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
          {searchResults.length > 0 && (
            <List sx={{ mt: 1 }}>
              {searchResults.map((result) => (
                <ListItem
                  key={result.id}
                  button
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 1,
                    mb: 1,
                    boxShadow: 3,
                    '&:hover': {
                      backgroundColor: 'grey.50',
                    },
                  }}
                  onClick={() => {
                    navigate(`/post/${result.id}`);
                    handleClose();
                  }}
                >
                  <ListItemText
                    primary={result.title}
                    secondary={
                      <div>
                        <MarkdownRenderer
                          content={result.description}
                          preview={true}
                        />
                      </div>
                    }
                    primaryTypographyProps={{
                      variant: 'title2',
                      noWrap: true,
                    }}
                    secondaryTypographyProps={{
                      variant: 'body2',
                      noWrap: true,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}

          {isSearching && (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              検索中...
            </Box>
          )}

          {!isSearching && searchQuery && searchResults.length === 0 && (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              検索結果はありません
            </Box>
          )}

        </Box>
      </Popover>
    </Box>
  );
}