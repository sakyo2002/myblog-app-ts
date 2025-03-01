import React from "react";
import { TextField, Box } from "@mui/material";
import { textAlign } from "@mui/system";

export default function PostTitleInput({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ boxSizing: 'border-box' }}>
      <TextField
        aria-label='記事タイトル'
        variant='standard'
        placeholder='記事タイトル'
        fullWidth
        value={value}
        multiline
        minRows={1}
        maxRows={1}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
          sx: {
            margin: '16px 0',
            fontSize: '35px',
            '& input::placeholder, & textarea::placeholder': {
              textAlign: 'left',  // プレースホルダーの配置
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%'
            },
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
            },
            '&:hover fieldset': {
              borderColor: '#c0c5c2', // ホバー時のボーダーの色を通常時と同じに設定
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '16px', // プレースホルダーのフォントサイズ
              color: '#a0a0a0', // プレースホルダーの文字色
            },
          },
        }}
      />
    </Box>
  )
}