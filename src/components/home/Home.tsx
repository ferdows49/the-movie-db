"use client";

import React from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import Trending from "./Trending";
import Trailers from "./Trailers";
import WhatsPopular from "./WhatsPopular";

type PropsType = {
  trendingAllData: {
    results: {
      id: number;
      backdrop_path: string;
      title: string;
      name: string;
      poster_path: string;
      media_type: string;
      release_date: string;
      first_air_date: string;
      vote_average: number;
    }[];
  };
  latestMovieData: {
    results: {
      id: number;
    }[];
  };
  whatsPopularData: {
    results: {
      id: number;
      backdrop_path: string;
      title: string;
      name: string;
      poster_path: string;
      media_type: string;
      release_date: string;
      first_air_date: string;
      vote_average: number;
    }[];
  };
};

const Home = ({
  trendingAllData,
  latestMovieData,
  whatsPopularData,
}: PropsType) => {
  console.log("whatsPopularData", whatsPopularData);

  return (
    <Box>
      <Banner />
      <Trending trendingAllData={trendingAllData} />
      {/* <Trailers latestMovieData={latestMovieData} /> */}
      <WhatsPopular whatsPopularData={whatsPopularData} />
    </Box>
  );
};

export default Home;
