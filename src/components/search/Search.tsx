"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "../shared/CustomContainer";
import { Grid } from "@mui/material";
import SearchInput from "./SearchInput";
import SearchSidebar from "./search-sidebar/SearchSidebar";
import { useAppSelector } from "@/src/redux/hooks";
import SearchMedia from "./search-content/SearchMedia";

type PropsType = {
  searchMovieData: {
    results: {
      id: number;
      title: string;
      backdrop_path: string;
      overview: string;
      poster_path: string;
      release_date: string;
    }[];
  };
};

const Search = ({ searchMovieData }: PropsType) => {
  const searchResultBy: number = useAppSelector(
    (state) => state.searchReducer.searchResultBy
  );

  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("currentData", currentData);

  const handlePageChange = async (event: any, page: number) => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // let url;

    // if (isFilterParams) {
    //   url = `${UrlConfig.BASE_URL}${ApiService.FILTER_MOVIES}?page=${page}&${filterUrl}api_key=${UrlConfig.API_KEY}`;
    // } else {
    //   if (slug === "popular") {
    //     url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    //   } else if (slug === "now-playing") {
    //     url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    //   } else if (slug === "upcoming") {
    //     url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    //   } else if (slug === "top-rated") {
    //     url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    //   }
    // }

    // if (url) {
    //   await axios
    //     .get(url)
    //     .then((res) => {
    //       setCurrentData(res?.data);
    //       setCurrentPage(page);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //     });
    // }
  };

  useEffect(() => {
    setLoading(true);
    setCurrentData(searchMovieData);
    setLoading(false);
  }, []);

  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
          <SearchInput />
        </Grid>
        <Grid item md={3}>
          <SearchSidebar resultNumber={12} />
        </Grid>
        <Grid item md={9}>
          {searchResultBy === 1 && (
            <SearchMedia
              mediaData={currentData}
              count={currentData?.total_pages}
              page={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Search;
