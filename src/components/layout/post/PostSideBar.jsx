import React from "react";
import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import XIcon from '@mui/icons-material/X';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export default function SideBar({ postId }) {

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/post/edit/${postId}`);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: '0 16px',
        position: 'sticky',
        top: '120px',
      }}>
      <FavoriteBorderIcon sx={{ cursor: 'pointer' }} />
      <XIcon sx={{ cursor: 'pointer' }} />
      <EditIcon
        sx={{
          cursor: 'pointer'
        }}
        onClick={handleEditClick}
      />
    </Box>
  )
}