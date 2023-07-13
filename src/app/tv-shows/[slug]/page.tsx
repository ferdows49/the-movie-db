import React from "react";
import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import TvShowList from "@/src/components/listing/TvShowList";

type ParamsType = {
  slug: string;
};

const TvShows = async ({ params: { slug } }: { params: ParamsType }) => {
  let data;
  let url;

  if (slug === "popular") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "airing-today") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_AIRING_TODAY_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "on-the-air") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_ON_THE_AIR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
  } else if (slug === "top-rated") {
    url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
  }

  if (url) {
    const response = await axios.get(url);
    data = await response.data;
  }

  return (
    <>
      <TvShowList data={data} slug={slug} />
    </>
  );
};

export default TvShows;
