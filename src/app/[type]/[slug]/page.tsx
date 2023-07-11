import Listing from "@/src/components/listing/Listing";
import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";

type ParamsType = {
  type: string;
  slug: string;
};

type SearchParamsType = {
  sort_by: string;
};

export default async function Pages({
  params: { type, slug },
  searchParams: {sort_by},
}: {
  params: ParamsType;
  searchParams: SearchParamsType;
}) {
  let data;
  let url;

  if (type === "movies") {
    if (slug === "popular") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "now-playing") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIES}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "upcoming") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIES}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "top-rated") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIES}?api_key=${UrlConfig.API_KEY}`;
    }
  } else if (type === "tv-shows") {
    if (slug === "popular") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "airing-today") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_AIRING_TODAY_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "on-the-air") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_ON_THE_AIR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
    } else if (slug === "top-rated") {
      url = `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
    }
  }

  if (url) {
    const response = await axios.get(url);
    data = await response.data;
  }

  return (
    <>
      <Listing data={data} type={type} slug={slug} sortBy={sort_by} />
    </>
  );
}
