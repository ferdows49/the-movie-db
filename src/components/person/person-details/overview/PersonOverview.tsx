import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import KnownFor from "./KnownFor";
import PersonHeadingInfo from "./PersonHeadingInfo";
import PersonalInfo from "./PersonalInfo";
import AllCredits from "./AllCredits";

type PropsType = {
  personDetailsData: {
    id: number;
    name: string;
    biography: string;
    profile_path: string;
    known_for_department: string;
    popularity: number;
    birthday: string;
    gender: number;
    place_of_birth: string;
    also_known_as: string[];
  };
  combinedCreditsData: {
    cast: {
      id: number;
      title: string;
      poster_path: string;
      popularity: number;
      name: string;
    }[];
  };
  externalIdsData: {
    facebook_id: "string" | null;
    instagram_id: "string" | null;
    twitter_id: "string" | null;
    youtube_id: "string" | null;
  };
  movieCreditsData: any;
  tvCreditsData: any;
};

const PersonOverview = ({
  personDetailsData,
  combinedCreditsData,
  movieCreditsData,
  tvCreditsData,
  externalIdsData,
}: PropsType) => {
  return (
    <Grid container columnSpacing={4}>
      <Grid item md={3}>
        <PersonalInfo
          knownCredits={combinedCreditsData?.cast?.length}
          personDetailsData={personDetailsData}
          externalIdsData={externalIdsData}
        />
      </Grid>
      <Grid item md={9}>
        <Grid container>
          <Grid item md={12}>
            <PersonHeadingInfo
              name={personDetailsData?.name}
              biography={personDetailsData?.biography}
            />
          </Grid>
          <Grid item md={12}>
            <KnownFor combinedCreditsData={combinedCreditsData} />
          </Grid>
          <Grid item md={12}>
            <AllCredits
              combinedCreditsData={combinedCreditsData}
              movieCreditsData={movieCreditsData}
              tvCreditsData={tvCreditsData}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonOverview;
