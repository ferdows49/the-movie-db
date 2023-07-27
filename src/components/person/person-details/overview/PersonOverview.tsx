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
    homepage: string;
  };
  combinedCreditsData: {
    cast: {
      id: number;
      title: string;
      original_title: string;
      poster_path: string;
      popularity: number;
      name: string;
      original_name: string;
      release_date: string;
      episode_count: number;
      character: string;
      overview: string;
      vote_average: number;
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
    <Grid
      container
      columnSpacing={4}
      sx={{
        justifyContent: {
          xs: "center",
          sm: "center",
        },
      }}
    >
      <Grid item xs={12} sm={12} md={3}>
        <PersonalInfo
          knownCredits={combinedCreditsData?.cast?.length}
          personDetailsData={personDetailsData}
          externalIdsData={externalIdsData}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <PersonHeadingInfo
              name={personDetailsData?.name}
              biography={personDetailsData?.biography}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <KnownFor combinedCreditsData={combinedCreditsData} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
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
