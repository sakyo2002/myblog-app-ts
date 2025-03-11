import { useState, useEffect, useRef } from "react";
import {
  InputAdornment,
  Popover,
  TextField,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { CustomSearchIcon } from '@/Icons/CustomSearchIcon';
import SearchIcon from '@mui/icons-material/Search';
import { MarkdownRenderer } from "../../../hooks/MarkdownRenderer";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../utils/supabaseClient'

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const searchIconRef = useRef<HTMLDivElement | null>(null);  // SearchIconのref
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Popoverの開閉状態
  const isOpen = Boolean(anchorEl);

  // 検索処理
  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const { data, error } = await supabase
      .from('posts')
      .select('id, title, description')
      .ilike('description', `%${query}%`)
      .order('date', { ascending: false })
      .limit(10);

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
  const handleSearchClick = (event: React.MouseEvent<Element>) => {
    const target = event.currentTarget;

    // 最も近い親要素を取得（またはnullを許容）
    const anchorElement = target.closest('div') || target;

    setAnchorEl(anchorElement as HTMLElement);
  };

  // Popoverを閉じる処理
  const handleClose = ()=> {
    setAnchorEl(null);
    setSearchQuery(''); // 検索をリセット
    setSearchResults([]); // 結果をクリア
  }

  // 入力値変更時の処理
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setSearchQuery(event.target.value);
  }

  return (
    <Box component='div' sx={{ display: 'inline-block' }}>
      <InputAdornment position='end' sx={{ color: 'text.primary' }}>
        <SearchIcon />
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
                  {/* <CustomSearchIcon
                    sx={{ cursor: 'pointer', fontSize: 'small' }}
                  /> */}
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          {searchResults.length > 0 && (
            <List sx={{ mt: 1 }}>
              {searchResults.map((result) => (
                <ListItem
                  key={result.id}
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
                          maxLength={100}
                        />
                      </div>
                    }
                    primaryTypographyProps={{
                      variant: 'subtitle2',
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