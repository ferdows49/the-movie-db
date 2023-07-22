import Search from '@/src/components/search/Search'
import { ApiService } from '@/src/config/ApiService';
import { UrlConfig } from '@/src/config/UrlConfig';
import axios from 'axios';
import React from 'react'

type PropsType = {
  params: {
    slug: string;
  }
}

const page = async ({params: {slug}}: PropsType) => {

  const searchMovieResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_SEARCH_MOVIE}?query=${slug}&api_key=${UrlConfig.API_KEY}`
  );
  const searchMovieData = await searchMovieResponse.data;

  return (
    <Search searchMovieData={searchMovieData} />
  )
}

export default page