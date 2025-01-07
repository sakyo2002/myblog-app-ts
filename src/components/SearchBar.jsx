import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export default function SearchBar() {
  return (
    <FormControl>
      <OutlinedInput
        size="small"
        id="search"
        sx={{
          flexGrow: 1,
          height: '36px',
          borderRadius: '10px',
        }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  )
}