"use client";

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgress, Grid, Pagination } from "@mui/material";
import CardImage from "../../assets/images/card-image.jpg";
import Image from "next/image";
import Options from "./Options";
import Rating from "./Rating";
import Link from "next/link";
import { useGetPopularMoviesQuery } from "@/src/redux/movies/movieApi";
import { UrlConfig } from "@/src/config/UrlConfig";
import { format } from "date-fns";
import axios from "axios";
import { ApiService } from "@/src/config/ApiService";

type ItemTypes = {
  vote_average: number;
  release_date: Date;
  title: string;
  id: number;
  poster_path: string;
};

type ItemCardPropsType = {
  data: any;
  slug: string;
};

const ItemCard = ({ data, slug }: ItemCardPropsType) => {
  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setLoading(true);
    let url;

    if (slug === "popular") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIE}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "now-playing") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIE}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "upcoming") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIE}?page=${page}&api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "top-rated") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIE}?page=${page}&api_key=${UrlConfig.API_KEY}`;
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
                        {item?.title}
                      </Typography>
                    </Link>

                    <Typography
                      className="text-base font-normal text-black opacity-60 mb-0"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {format(new Date(item?.release_date), "dd MMM yyyy")}
                    </Typography>
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
