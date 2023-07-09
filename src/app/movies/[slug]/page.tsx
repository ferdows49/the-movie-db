import Listing from "@/src/components/listing/Listing";
import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import { useRouter } from "next/router";

export default async function Movies({ params }: any) {

  if (params.slug === "popular") {
    const response = await axios.get(
      `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIE}?api_key=${UrlConfig.API_KEY}`
    );
    const data = await response.data;

    return (
      <>
        <Listing
          data={data}
          slug={params.slug}
        />
      </>
    );
  } else if (params.slug === "now-playing") {
    const response = await axios.get(
      `${UrlConfig.BASE_URL}${ApiService.GET_NOW_PLAYING_MOVIE}?api_key=${UrlConfig.API_KEY}`
    );
    const data = await response.data;

    return (
      <>
        <Listing
          data={data}
          slug={params.slug}
        />
      </>
    );
  } else   if (params.slug === "upcoming") {
    const response = await axios.get(
      `${UrlConfig.BASE_URL}${ApiService.GET_UPCOMING_MOVIE}?api_key=${UrlConfig.API_KEY}`
    );
    const data = await response.data;

    return (
      <>
        <Listing
          data={data}
          slug={params.slug}
        />
      </>
    );
  } else   if (params.slug === "top-rated") {
    const response = await axios.get(
      `${UrlConfig.BASE_URL}${ApiService.GET_TOP_RATED_MOVIE}?api_key=${UrlConfig.API_KEY}`
    );
    const data = await response.data;

    return (
      <>
        <Listing
          data={data}
          slug={params.slug}
        />
      </>
    );
  }
}
