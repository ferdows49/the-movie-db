export type MediaDetailsPropsType = {
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
  original_title: string;
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
    iso_639_1: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type CreditsDataPropsType = {
  cast: {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  crew: {
    credit_id: string;
    department: string;
    job: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
};

export type VideosDataPropsType = {
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }[];
};

export type ExternalIdsPropsType = {
  facebook_id: string;
  id: number;
  imdb_id: string;
  instagram_id: string;
  twitter_id: string;
  wikidata_id: string;
};
