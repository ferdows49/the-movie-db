import Search from "@/src/components/search/Search";
import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "@/src/config/UrlConfig";
import axios from "axios";
import React from "react";

type PropsType = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: PropsType) => {
  const searchMovieResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_MOVIES}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchMovieData = await searchMovieResponse.data;

  const searchTvShowResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_TV_SHOWS}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchTvShowData = await searchTvShowResponse.data;

  const searchPeopleResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_PEOPLE}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchPeopleData = await searchPeopleResponse.data;

  const searchCompanyResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_COMPANIES}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchCompanyData = await searchCompanyResponse.data;

  const searchKeywordResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_KEYWORDS}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchKeywordData = await searchKeywordResponse.data;

  const searchCollectionResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_COLLECTIONS}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchCollectionData = await searchCollectionResponse.data;

  return (
    <Search
      slug={slug}
      searchMovieData={searchMovieData}
      searchMovieTotalResults={searchMovieData?.total_results}
      searchTvShowTotalResults={searchTvShowData?.total_results}
      searchPeopleTotalResults={searchPeopleData?.total_results}
      searchCompanyTotalResults={searchCompanyData?.total_results}
      searchKeywordTotalResults={searchKeywordData?.total_results}
      searchCollectionTotalResults={searchCollectionData?.total_results}
    />
  );
};

export default page;
