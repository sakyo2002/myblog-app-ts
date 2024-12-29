import React from "react";
import { Box, TextField } from "@mui/material";

export default function PostContentEditor({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <TextField
        aria-label='本文'
        placeholder='エンジニアに関わる知識をMarkdown記法で書いて共有しよう'
        variant='outlined'
        fullWidth
        value={value}
        onChange={handleChange}
        multiline
        InputProps={{
          sx: {
            height: '100%',
            backgroundColor: 'white',
            textAlign: 'left',
          }
        }}
        sx={{
          width: '100%',
          height: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '5px',
          },
          '& .MuiInputBase-input::placeholder': {
            fontSize: '16px', // プレースホルダーのフォントサイズ
            color: '#a0a0a0', // プレースホルダーの文字色
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit', // 枠線の色を無効化
          },
        }}
      />
    </Box>
  )
}