import React, { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

type PropsType = {
  slug: string
}

const SearchInput = ({ slug }: PropsType) => {
  const [searchBy, setSearchBy] = useState<string>(slug);

  const router = useRouter();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        fullWidth
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
        onKeyPress={(event: any) => {
          if (event.key === "Enter") {
            const searchValue = event.target.value.trim();
            if (searchValue) {
              router.push(`/search/${event?.target?.value}`);
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#01B4E4 !important",
          marginLeft: "10px",
          textTransform: "capitalize",
        }}
        onClick={() => searchBy && router.push(`/search/${searchBy}`)}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
