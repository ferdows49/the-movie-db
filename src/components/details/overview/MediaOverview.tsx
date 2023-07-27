import React from "react";
import { Grid, Container, Box } from "@mui/material";
import OverviewBanner from "./OverviewBanner";
import TopBilledCast from "./top-billed-cast/TopBilledCast";
import MediaBasicInfo from "./MediaBasicInfo";

const MediaOverview = () => {
  return (
    <Box>
      <OverviewBanner />
      <Container maxWidth="xl">
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={9} sx={{ paddingY: { md: "30px" } }}>
            <TopBilledCast />
          </Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ paddingY: { md: "30px" } }}>
            <MediaBasicInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MediaOverview;
