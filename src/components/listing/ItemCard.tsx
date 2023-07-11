"use client";

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgress, Grid, Pagination } from "@mui/material";
import Image from "next/image";
import Options from "./card/Options";
import Rating from "./card/Rating";
import Link from "next/link";
import { UrlConfig } from "@/src/config/UrlConfig";
import { format } from "date-fns";
import axios from "axios";
import { ApiService } from "@/src/config/ApiService";
import { useAppSelector } from "@/src/redux/hooks";

type ItemTypes = {
  vote_average: number;
  release_date: Date | string;
  first_air_date: Date | string;
  title: string;
  name?: string;
  id: number;
  poster_path: string;
};

type ItemCardPropsType = {
  data: any;
  type: string;
  slug: string;
};

const ItemCard = ({ data, type, slug }: ItemCardPropsType) => {
  const filteredBy = useAppSelector((state) => state.listingReducer.filter);
  console.log("filteredBy", filteredBy);

  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(currentData);

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setLoading(true);
    let url;

    if (type === "movies") {
      if (slug === "popular") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "now-playing") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "upcoming") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      } else if (slug === "top-rated") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIES}?page=${page}&api_key=${UrlConfig.API_KEY}`;
      }
    } else if (type === "tv-shows") {
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
          console.log("err", err.message);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url;
      let params;

      if (type === "movies") {
        // if (filteredBy?.sortBy) {
        //   params = `&sort_by=${filteredBy?.sortBy}`;
        // }
        url = `${UrlConfig.BASE_URL}${ApiService.FILTER_MOVIES}?page=${currentPage}&sort_by=${filteredBy?.sortBy}&api_key=${UrlConfig.API_KEY}`;
      } else if (type === "tv-shows") {
        url = `${UrlConfig.BASE_URL}${ApiService.FILTER_TV_SHOWS}?&api_key=${UrlConfig.API_KEY}`;
      }

      if (url) {
        await axios
          .get(url)
          .then((res) => {
            setCurrentData(res?.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log("err", err.message);
            setLoading(false);
          });
      }
    };

    fetchData();
  }, [filteredBy]);

  useEffect(() => {
    setCurrentData(data);
  }, []);

  return (
    <Grid container spacing={4}>
      {currentData?.results?.length === 0 || loading ? (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          {currentData?.results?.length !== 0 &&
            currentData?.results?.map((item: ItemTypes) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item?.id}>
                <Card className="rounded-lg shadow-md">
                  <Box className="relative" sx={{ height: "320px" }}>
                    <Link href="/">
                      <Image
                        width={500}
                        height={280}
                        src={`${UrlConfig.IMAGE_BASE_URL}${item?.poster_path}`}
                        alt=""
                        className="w-full h-full cursor-pointer"
                      />
                    </Link>
                    <Box className="absolute top-3 right-3">
                      <Options />
                    </Box>
                    <Box className="absolute left-3 bottom-[-26px]">
                      <Rating voteAverage={item?.vote_average} />
                    </Box>
                  </Box>
                  <CardContent className="pt-8 !pb-4 h-32 min-h-full">
                    <Link href="/">
                      <Typography
                        className="text-base font-bold text-black cursor-pointer"
                        variant="h5"
                        component="div"
                      >
                        {item?.title || item?.name}
                      </Typography>
                    </Link>

                    {(item?.release_date || item?.first_air_date) && (
                      <Typography
                        className="text-base font-normal text-black opacity-60 mb-0"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {format(
                          new Date(item?.release_date || item?.first_air_date),
                          "dd MMM yyyy"
                        )}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
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
  );
};

export default ItemCard;
