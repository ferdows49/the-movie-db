import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import KnownFor from "./KnownFor";
import PersonHeadingInfo from "./PersonHeadingInfo";
import PersonalInfo from "./PersonalInfo";

type PropsType = {
  name: string;
  biography: string;
  posterPath: string;
  combinedCreditsData: {
    cast: {
      id: number;
      title: string;
      poster_path: string;
      popularity: number;
      name: string;
    }[];
  };
};

const PersonOverview = ({
  name,
  biography,
  posterPath,
  combinedCreditsData,
}: PropsType) => {
  return (
    <Grid container columnSpacing={4}>
      <Grid item md={3}>
        <PersonalInfo posterPath={posterPath} />
      </Grid>
      <Grid item md={9}>
        <Grid container>
          <Grid item md={12}>
            <PersonHeadingInfo name={name} biography={biography} />
          </Grid>
          <Grid item md={12}>
            <KnownFor combinedCreditsData={combinedCreditsData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonOverview;
