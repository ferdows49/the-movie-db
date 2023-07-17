import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import axios from "axios";
import Person from "@/src/components/person/person-list/Person";

const page = async () => {
  const response = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_PERSON}?api_key=${UrlConfig.API_KEY}`
  );
  const data = await response.data;

  return (
    <Person data={data} />
  );
};

export default page;
