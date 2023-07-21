import axios from "axios";
import { UrlConfig } from "../config/UrlConfig";
import { ApiService } from "../config/ApiService";
import Image from "next/image";
import Home from "../components/home/Home";

export default async function Page() {

  const trendingAllResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/day?api_key=${UrlConfig.API_KEY}`
  );
  const trendingAllData = await trendingAllResponse.data;

  return (
    <>
      <Home trendingAllData={trendingAllData} />
    </>
  );
}
