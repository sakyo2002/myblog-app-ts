import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CreatePostButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-post')
}

  return (
    <Button
      color='primary'
      variant='contained'
      size='small'
      onClick={handleClick}
    >
      投稿
    </Button>
  )
}