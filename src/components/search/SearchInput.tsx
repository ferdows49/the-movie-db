import React from "react";
import {
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <CircularProgress size={20} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
