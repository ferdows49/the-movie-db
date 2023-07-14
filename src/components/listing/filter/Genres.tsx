"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useGetMovieGenresQuery } from "@/src/redux/listing/movieApi";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { filterByGenres } from "@/src/redux/listing/listingSlice";

type GenreTypes = {
  id: number;
  name: string;
};

const Genres = () => {

  const { data } = useGetMovieGenresQuery("");

  const dispatch = useAppDispatch();

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<number[]>([]);

  const handleClick = (id: number, name: string) => {
    if (selectedGenres.includes(name)) {
      const filteredGenres = selectedGenres?.filter((item) => item !== name);
      setSelectedGenres(filteredGenres);

      const filteredGenreId = selectedGenreId?.filter((item) => item !== id);
      setSelectedGenreId(filteredGenreId);
    } else {
      setSelectedGenres([...selectedGenres, name]);
      setSelectedGenreId([...selectedGenreId, id]);
    }
  };

  useEffect(() => {
    if (selectedGenreId) {
      dispatch(filterByGenres(selectedGenreId));
    }
  }, [selectedGenreId]);

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Genres</Typography>
      <Box>
        {data &&
          data?.genres?.length > 0 &&
          data?.genres?.map(({ id, name }: GenreTypes) => (
            <Chip
              key={id}
              sx={{
                color: `${
                  selectedGenres.includes(name) ? "#FFFFFF" : "#000000de"
                }`,
                backgroundColor: `${
                  selectedGenres.includes(name) ? "#01B4E4" : "#FFFFFF"
                }`,
                border: `${
                  selectedGenres.includes(name)
                    ? "1px solid #01B4E4"
                    : "1px solid #000000de"
                }`,
                fontWeight: "medium",
                cursor: "pointer",
                margin: "4px",
                "&:hover": {
                  border: "1px solid #01B4E4",
                  color: "#FFFFFF",
                  backgroundColor: "#01B4E4 !important",
                },
              }}
              label={name}
              variant="outlined"
              size="medium"
              onClick={() => handleClick(id, name)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Genres;
