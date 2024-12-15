import React from "react";
import { Box, TextareaAutosize } from "@mui/material";

export default function PostContentEditor({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <TextareaAutosize
        aria-label='本文'
        placeholder='エンジニアに関わる知識をMarkdown記法で書いて共有しよう'
        variant='outlined'
        fullWidth
        value={value}
        onChange={handleChange}
        multiline
        style={{
          width: '100%',
          outline: 'none',
          resize: 'none',
          fontSize: '16px',
          border: '1px solid #c0c5c2',
          borderRadius: '5px',
          display: 'block',
          height: '554px',
          padding: 0,
        }}
      />
    </Box>
  )
}