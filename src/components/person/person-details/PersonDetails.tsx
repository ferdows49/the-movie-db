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
};

const PersonDetails = ({
  personDetailsData,
  combinedCreditsData,
}: PropsType) => {
  console.log("combinedCreditsData", combinedCreditsData);

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
                name={personDetailsData?.name}
                biography={personDetailsData?.biography}
                posterPath={personDetailsData?.profile_path}
                combinedCreditsData={combinedCreditsData}
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
