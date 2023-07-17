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

  return (
    <PersonDetails
      personDetailsData={personDetailsData}
      combinedCreditsData={combinedCreditsData}
    />
  );
};

export default PersonDetailsPage;
