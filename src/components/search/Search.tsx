"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "../shared/CustomContainer";
import { Grid } from "@mui/material";
import SearchInput from "./SearchInput";
import SearchSidebar from "./search-sidebar/SearchSidebar";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import SearchMedia from "./search-content/SearchMedia";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import axios from "axios";
import CircularLoading from "../shared/CircularLoading";
import SearchPeople from "./search-content/SearchPeople";
import SearchCompanies from "./search-content/SearchCompanies";
import SearchKeywords from "./search-content/SearchKeywords";
import { setSearchResultBy } from "@/src/redux/search/searchSlice";

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
  slug: string;
  searchMovieTotalResults: number;
  searchTvShowTotalResults: number;
  searchPeopleTotalResults: number;
  searchCompanyTotalResults: number;
  searchKeywordTotalResults: number;
  searchCollectionTotalResults: number;
};

const Search = ({
  slug,
  searchMovieData,
  searchMovieTotalResults,
  searchTvShowTotalResults,
  searchCollectionTotalResults,
  searchCompanyTotalResults,
  searchKeywordTotalResults,
  searchPeopleTotalResults,
}: PropsType) => {
  const searchResultBy: number = useAppSelector(
    (state) => state.searchReducer.searchResultBy
  );

  const dispatch = useAppDispatch();

  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = async (event: any, page: number = 1) => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let url;

    if (searchResultBy === 1) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_MOVIES}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (searchResultBy === 2) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_PEOPLE}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (searchResultBy === 3) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_TV_SHOWS}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (searchResultBy === 4) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_COLLECTIONS}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (searchResultBy === 5) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_COMPANIES}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (searchResultBy === 6) {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_KEYWORDS}?query=${slug}&page=${page}&api_key=${UrlConfig.API_KEY}`;
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
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    handlePageChange("");
  }, [searchResultBy]);

  useEffect(() => {
    setLoading(true);
    setCurrentData(searchMovieData);
    setLoading(false);

    return () => {
      dispatch(setSearchResultBy(1));
    };
  }, []);

  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
          <SearchInput slug={slug} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <SearchSidebar
            searchMovieTotalResults={searchMovieTotalResults}
            searchTvShowTotalResults={searchTvShowTotalResults}
            searchCollectionTotalResults={searchCollectionTotalResults}
            searchCompanyTotalResults={searchCompanyTotalResults}
            searchKeywordTotalResults={searchKeywordTotalResults}
            searchPeopleTotalResults={searchPeopleTotalResults}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          {loading ? (
            <CircularLoading />
          ) : (
            <>
              {(searchResultBy === 1 ||
                searchResultBy === 3 ||
                searchResultBy === 4) && (
                <SearchMedia
                  mediaData={currentData}
                  count={currentData?.total_pages}
                  page={currentPage}
                  handlePageChange={handlePageChange}
                />
              )}
              {searchResultBy === 2 && (
                <SearchPeople
                  peopleData={currentData}
                  count={currentData?.total_pages}
                  page={currentPage}
                  handlePageChange={handlePageChange}
                />
              )}
              {searchResultBy === 5 && (
                <SearchCompanies
                  companyData={currentData}
                  count={currentData?.total_pages}
                  page={currentPage}
                  handlePageChange={handlePageChange}
                />
              )}
              {searchResultBy === 6 && (
                <SearchKeywords
                  keywordData={currentData}
                  count={currentData?.total_pages}
                  page={currentPage}
                  handlePageChange={handlePageChange}
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Search;
