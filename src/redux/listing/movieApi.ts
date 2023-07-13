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
      query: () =>
        `/${ApiService.GET_POPULAR_MOVIES}?api_key=${UrlConfig.API_KEY}`,
    }),
    getMovieGenres: builder.query({
      query: () =>
        `/${ApiService.GET_MOVIE_GENERS}?api_key=${UrlConfig.API_KEY}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetMovieGenresQuery } = movieApi;
