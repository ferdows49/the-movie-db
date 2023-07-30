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

  const credits = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_MOVIE_DETAILS}/${slug}/credits?api_key=${UrlConfig.API_KEY}`
  );
  const creditsData = await credits.data;

  const videos = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_MOVIE_DETAILS}/${slug}/videos?api_key=${UrlConfig.API_KEY}`
  );
  const videosData = await videos.data;

  const externalIds = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_MOVIE_DETAILS}/${slug}/external_ids?api_key=${UrlConfig.API_KEY}`
  );
  const externalIdsData = await externalIds.data;

  return (
    <MovieDetails
      movieDetailsData={movieDetailsData}
      creditsData={creditsData}
      videosData={videosData}
      externalIdsData={externalIdsData}
    />
  );
};

export default page;
