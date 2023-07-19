import React from "react";
import axios from "axios";
import PersonDetails from "@/src/components/person/person-details/PersonDetails";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";

type ParamsType = {
  params: {
    slug: string;
  };
};

const PersonDetailsPage = async ({ params: { slug } }: ParamsType) => {
  const personDetails = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}?api_key=${UrlConfig.API_KEY}`
  );
  const personDetailsData = await personDetails.data;

  const combinedCreditsResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}/${ApiService.GET_COMBINED_CREDITS}?api_key=${UrlConfig.API_KEY}`
  );
  const combinedCreditsData = await combinedCreditsResponse.data;

  const movieCreditsResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}/${ApiService.GET_MOVIE_CREDITS}?api_key=${UrlConfig.API_KEY}`
  );
  const movieCreditsData = await movieCreditsResponse.data;

  const tvCreditsResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}/${ApiService.GET_COMBINED_CREDITS}?api_key=${UrlConfig.API_KEY}`
  );
  const tvCreditsData = await tvCreditsResponse.data;

  const externalIdsResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}/${ApiService.GET_EXTERNAL_ID}?api_key=${UrlConfig.API_KEY}`
  );
  const externalIdsData = await externalIdsResponse.data;

  const personImageResponse = await axios.get(
    `${UrlConfig.BASE_URL}${ApiService.GET_PERSON_DETAILS}/${slug}/${ApiService.GET_PERSONAL_IMAGES}?api_key=${UrlConfig.API_KEY}`
  );
  const personImageData = await personImageResponse.data;

  return (
    <PersonDetails
      personDetailsData={personDetailsData}
      combinedCreditsData={combinedCreditsData}
      movieCreditsData={movieCreditsData}
      tvCreditsData={tvCreditsData}
      externalIdsData={externalIdsData}
      personImageData={personImageData}
    />
  );
};

export default PersonDetailsPage;
