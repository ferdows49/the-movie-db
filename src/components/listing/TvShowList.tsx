"use client";

import React, { useState, useEffect } from "react";
import { Grid, Pagination, Box } from "@mui/material";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import { ApiService } from "@/src/config/ApiService";
import ItemCard from "./card/ItemCard";
import CircularLoading from "../shared/CircularLoading";
import ItemFilter from "./filter/ItemFilter";
import { useAppSelector } from "@/src/redux/hooks";

type TvShowListPropsType = {
  data: any;
  slug: string;
};

type ItemTypes = {
  vote_average: number;
  first_air_date: Date | string;
  name: string;
  id: number;
  poster_path: string;
};

const TvShowList = ({ data, slug }: TvShowListPropsType) => {
  const { filterUrl, isFilterParams } = useAppSelector(
    (state) => state.listingReducer
  );
  
  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = async (
    event: any,
    page: number
  ) => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let url;

    if (isFilterParams) {
      url = `${UrlConfig.BASE_URL}${ApiService.FILTER_TV_SHOWS}?page=${page}&${filterUrl}api_key=${UrlConfig.API_KEY}`;
    } else {
      if (slug === "popular") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_TV_SHOWS}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "airing-today") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_AIRING_TODAY_TV_SHOWS}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "on-the-air") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_ON_THE_AIR_TV_SHOWS}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "top-rated") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_TV_SHOWS}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      }
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
    setLoading(true);
    setCurrentData(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (!isFilterParams) {
      handlePageChange("", 1);
    }
    setLoading(false);
  }, [isFilterParams]);

  return (
    <Box
      className="p-4 sm:p-6 md:p-10 bg-slate-100 bg-opacity-8"
      sx={{ minHeight: "90vh" }}
    >
      {!currentData || currentData?.results?.length === 0 ? (
        <CircularLoading />
      ) : (
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <ItemFilter
              setLoading={setLoading}
              setCurrentData={setCurrentData}
              setCurrentPage={setCurrentPage}
              type={"tv-show"}
            />
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
                        title={item?.name}
                        posterPath={item?.poster_path}
                        releaseDate={item?.first_air_date}
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
      )}
    </Box>
  );
};

export default TvShowList;
