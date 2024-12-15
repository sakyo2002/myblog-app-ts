import React from "react";
import { TextareaAutosize, Box } from "@mui/material";

export default function PostTitleInput({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ mb: 1 }}>
      <TextareaAutosize
        aria-label='タイトルを入力してください'
        variant='outlined'
        placeholder='タイトルを入力してください'
        fullWidth
        value={value}
        multiline
        minRows={1}
        onChange={handleChange}
        style={{
          width: '100%',
          outline: 'none',
          resize: 'none',
          fontSize: '27px',
          border: '1px solid #c0c5c2',
          borderRadius: '5px',
          display: 'block',
        }}
      />
    </Box>
  )
}