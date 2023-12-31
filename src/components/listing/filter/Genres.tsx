import React, { useEffect, useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useGetMovieGenresQuery } from "@/src/redux/listing/movieApi";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { filterByGenres } from "@/src/redux/listing/listingSlice";
import axios from "axios";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";

type GenreTypes = {
  id: number;
  name: string;
};

const Genres = ({ type }: { type: string }) => {
  const selectedGenreId = useAppSelector(
    (state) => state.listingReducer.filterParams.genres
  );

  const [data, setData] = useState<any>();

  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    if (selectedGenreId?.includes(id)) {
      const filteredGenreId = selectedGenreId?.filter((item) => item !== id);
      dispatch(filterByGenres(filteredGenreId));
    } else {
      let newGenre = [...selectedGenreId, id];
      dispatch(filterByGenres(newGenre));
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      let url;
      if (type === "movie") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_MOVIE_GENERS}?api_key=${UrlConfig.API_KEY}`;
      } else if (type === "tv-show") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_TV_SHOW_GENERS}?api_key=${UrlConfig.API_KEY}`;
      }

      if (url) {
        axios.get(url).then(
          res => setData(res?.data)
        )
      }
    };

    fetchGenres();
  }, [type]);

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
                  selectedGenreId.includes(id) ? "#FFFFFF" : "#000000de"
                }`,
                backgroundColor: `${
                  selectedGenreId.includes(id) ? "#01B4E4" : "#FFFFFF"
                }`,
                border: `${
                  selectedGenreId.includes(id)
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
              onClick={() => handleClick(id)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Genres;
