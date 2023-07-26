import React from "react";
import MovieDetails from "@/src/components/details/MovieDetails";
import axios from "axios";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";

type PropsType = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: PropsType) => {

  const movieDetails = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_MOVIE_DETAILS}/${slug}?api_key=${UrlConfig.API_KEY}`
  );
  const movieDetailsData = await movieDetails.data;

  return <MovieDetails movieDetailsData={movieDetailsData} />;
};

export default page;
