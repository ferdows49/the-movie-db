import React from "react";
import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import MovieList from "@/src/components/listing/MovieList";

type ParamsType = {
  slug: string;
};

const Movies = async ({ params: { slug } }: { params: ParamsType }) => {
  let data;
  let url;

  if (slug === "popular") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "now-playing") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIES}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "upcoming") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIES}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "top-rated") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIES}?api_key=${UrlConfig.API_KEY}`;
  }

  if (url) {
    const response = await axios.get(url);
    data = await response.data;
  }

  return (
    <>
      <MovieList data={data} slug={slug} />
    </>
  );
};

export default Movies;
