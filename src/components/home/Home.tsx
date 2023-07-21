"use client";

import React from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import Trending from "./Trending";

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
  }
};

const Home = ({ trendingAllData }: PropsType) => {
  console.log("trendingAllData", trendingAllData);

  return (
    <Box>
      <Banner />
      <Trending trendingAllData={trendingAllData} />
    </Box>
  );
};

export default Home;
