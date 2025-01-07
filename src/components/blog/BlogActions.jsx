import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import CreatePostButton from "./CreatePostButton";

export default function BlogActions() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <SearchBar />
      <CreatePostButton />
    </Box>
  )
}