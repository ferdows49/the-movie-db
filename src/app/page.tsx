import Listing from "@/src/components/listing/Listing";
import axios from "axios";
import { UrlConfig } from "../config/UrlConfig";
import { ApiService } from "../config/ApiService";

export default async function Home(users: any) {

  const response = await axios.get(`${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIE}?api_key=${UrlConfig.API_KEY}`);
  const data = await response.data;

  return (
    <>
      <Listing
        data={data}
      />
    </>
  );
}
