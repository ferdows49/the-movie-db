import { ApiService } from "@/src/config/ApiService";
import { UrlConfig } from "../../config/UrlConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${UrlConfig.BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: `${ApiService.GET_POPULAR_MOVIES}`,
        params: { api_key: UrlConfig.API_KEY },
      }),
    }),
    getMovieGenres: builder.query({
      query: () => ({
        url: `${ApiService.GET_MOVIE_GENERS}`,
        params: { api_key: UrlConfig.API_KEY },
      }),
    }),
    getLanguages: builder.query({
      query: () => ({
        url: `${ApiService.GET_LANGUAGES}`,
        params: { api_key: UrlConfig.API_KEY },
      }),
    }),
    getFilteredData: builder.query({
      query: (param: object) => ({
        url: `${ApiService.GET_FILTERED_DATA}`,
        params: { ...param, api_key: UrlConfig.API_KEY },
      }),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieGenresQuery,
  useGetLanguagesQuery,
  useGetFilteredDataQuery
} = movieApi;
