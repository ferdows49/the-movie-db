"use client";

import React, { useState } from "react";
import MediaNav from "./MediaNav";

type PropsType = {
  movieDetailsData: {
    backdrop_path: string;
    budget: number;
    genres: {
      name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
      logo_path: string;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
      name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
};

const MovieDetails = ({ movieDetailsData }: PropsType) => {
  console.log("movieDetailsData", movieDetailsData);

  return <MediaNav />;
};

export default MovieDetails;
