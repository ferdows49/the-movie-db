"use client";

import React, { useState, useEffect, SyntheticEvent } from "react";
import CustomContainer from "../../shared/CustomContainer";
import { Grid, Tab, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonOverview from "./overview/PersonOverview";

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

const PersonDetails = ({
  personDetailsData,
  combinedCreditsData,
  movieCreditsData,
  tvCreditsData,
  externalIdsData,
}: PropsType) => {
  console.log("combinedCreditsData", combinedCreditsData);
  console.log("movieCreditsData", movieCreditsData);
  console.log("tvCreditsData", tvCreditsData);

  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <CustomContainer>
      <Grid container>
        <Grid item md={12}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Overview" value="1" />
                <Tab label="Media" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PersonOverview
                key={personDetailsData?.id}
                personDetailsData={personDetailsData}
                combinedCreditsData={combinedCreditsData}
                movieCreditsData={movieCreditsData}
                tvCreditsData={tvCreditsData}
                externalIdsData={externalIdsData}
              />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default PersonDetails;
