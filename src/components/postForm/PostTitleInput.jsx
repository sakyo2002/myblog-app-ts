import React from "react";
import { TextField, Box } from "@mui/material";

export default function PostTitleInput({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ mb: 1 }}>
      <TextField
        aria-label='タイトルを入力してください'
        variant='outlined'
        placeholder='タイトルを入力してください'
        fullWidth
        value={value}
        multiline
        minRows={1}
<<<<<<< HEAD
        maxRows={1}
=======
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
        onChange={handleChange}
        InputProps={{
          style: {
            fontSize: '20px',
            padding: 10,
            backgroundColor: 'white', // 入力エリア全体の背景色
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '5px',
<<<<<<< HEAD
            '&:hover fieldset': {
              borderColor: '#c0c5c2', // ホバー時のボーダーの色を通常時と同じに設定
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '16px', // プレースホルダーのフォントサイズ
              color: '#a0a0a0', // プレースホルダーの文字色
            },
=======
          },
          '& .MuiInputBase-input::placeholder': {
            fontSize: '16px', // プレースホルダーのフォントサイズ
            color: '#a0a0a0', // プレースホルダーの文字色
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
          },
        }}
      />
    </Box>
  )
}