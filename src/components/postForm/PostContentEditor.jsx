import React from "react";
import { Box, TextField } from "@mui/material";

export default function PostContentEditor({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
<<<<<<< HEAD
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        '& .MuiTextField-root': {
          height: '100%',
        }
    }}>
=======
    <Box sx={{ height: '100%' }}>
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
      <TextField
        aria-label='本文'
        placeholder='エンジニアに関わる知識をMarkdown記法で書いて共有しよう'
        variant='outlined'
        fullWidth
        value={value}
        onChange={handleChange}
        multiline
<<<<<<< HEAD
        minRows={5}
        InputProps={{
          sx: {
            backgroundColor: 'white',
            textAlign: 'left',
            padding: '8px',
            height: '100%',
            overflow: 'auto',
=======
        InputProps={{
          sx: {
            height: '100%',
            backgroundColor: 'white',
            textAlign: 'left',
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
          }
        }}
        sx={{
          width: '100%',
          height: '100%',
          '& .MuiOutlinedInput-root': {
<<<<<<< HEAD
            height: '100%',
            borderRadius: '5px',
            '& .MuiInputBase-input': {
              height: '100% !important', // 追加
              overflow: 'auto !important', // 追加
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '16px', // プレースホルダーのフォントサイズ
              color: '#a0a0a0', // プレースホルダーの文字色
            },
            '& fieldset': { // 追加：ボーダーのスタイリング
              borderColor: '#c0c5c2',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#c0c5c2', // ホバー時のボーダーの色を通常時と同じに設定
              borderWidth: '1px', // 追加：ホバー時のボーダー幅を明示的に設定
            },
            '&.Mui-focused fieldset': { // 追加：フォーカス時のスタイリング
              borderColor: '#c0c5c2',
              borderWidth: '1px',
            },
=======
            borderRadius: '5px',
          },
          '& .MuiInputBase-input::placeholder': {
            fontSize: '16px', // プレースホルダーのフォントサイズ
            color: '#a0a0a0', // プレースホルダーの文字色
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit', // 枠線の色を無効化
>>>>>>> 612d5168bed98bd295f11387c7d420ff08f87ec2
          },
        }}
      />
    </Box>
  )
}