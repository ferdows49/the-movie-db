import axios from "axios";
import { UrlConfig } from "../config/UrlConfig";
import { ApiService } from "../config/ApiService";
import Home from "../components/home/Home";

export default async function Page() {
  const trendingAllResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/day?api_key=${UrlConfig.API_KEY}`
  );
  const trendingAllData = await trendingAllResponse.data;

  const latestMovieResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_LATEST_MOVIE}?api_key=${UrlConfig.API_KEY}`
  );
  const latestMovieData = await latestMovieResponse.data;

  const whatsPopularResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`
  );
  const whatsPopularData = await whatsPopularResponse.data;

  return (
    <>
      <Home
        trendingAllData={trendingAllData}
        latestMovieData={latestMovieData}
        whatsPopularData={whatsPopularData}
      />
    </>
  );
}
