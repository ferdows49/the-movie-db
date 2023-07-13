"use client";

import React, { useState, useEffect } from "react";
import { Grid, Pagination, Box } from "@mui/material";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import { ApiService } from "@/src/config/ApiService";
import ItemCard from "./card/ItemCard";
import CircularLoading from "../shared/CircularLoading";
import ItemFilter from "./filter/ItemFilter";

type MovieListPropsType = {
  data: any;
  slug: string;
};

type ItemTypes = {
  vote_average: number;
  release_date: Date | string;
  first_air_date: Date | string;
  title: string;
  name?: string;
  id: number;
  poster_path: string;
};

const MovieList = ({ data, slug }: MovieListPropsType) => {
  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(currentData);

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    let url;

    if (slug === "popular") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "now-playing") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "upcoming") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "top-rated") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    }

    if (url) {
      await axios
        .get(url)
        .then((res) => {
          setCurrentData(res?.data);
          setCurrentPage(page);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err.message);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    setCurrentData(data);
    setLoading(false);
  }, []);

  return (
    <Box
      className="p-4 sm:p-6 md:p-10 bg-slate-100 bg-opacity-8"
      sx={{ minHeight: "90vh" }}
    >
      <Grid container columnSpacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <ItemFilter />
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          {loading ? (
            <CircularLoading />
          ) : (
            <Grid container spacing={4}>
              {currentData && currentData?.results?.length > 0 && (
                <>
                  {currentData?.results?.map((item: ItemTypes) => (
                    <ItemCard
                      key={item?.id}
                      title={item?.title}
                      posterPath={item?.poster_path}
                      releaseDate={item?.release_date}
                      voteAverage={item?.vote_average}
                    />
                  ))}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="py-8 flex justify-center items-center"
                  >
                    <Pagination
                      count={currentData?.total_pages}
                      page={currentPage}
                      onChange={handlePageChange}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieList;
