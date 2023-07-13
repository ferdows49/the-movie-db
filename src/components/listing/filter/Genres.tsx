"use client";

import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useGetMovieGenresQuery } from "@/src/redux/listing/movieApi";

const Genres = () => {
  const { data } = useGetMovieGenresQuery('');

  console.log("data", data);
  

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Genres</Typography>
      <Box>
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
        <Chip
          sx={{
            fontWeight: "medium",
            cursor: "pointer",
            margin: "4px",
            "&:hover": {
              border: "1px solid #01B4E4",
              color: "#FFFFFF",
              backgroundColor: "#01B4E4",
            },
          }}
          label="primary"
          variant="outlined"
          size="medium"
        />
      </Box>
    </Box>
  );
};

export default Genres;
