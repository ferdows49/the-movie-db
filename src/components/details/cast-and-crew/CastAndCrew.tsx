import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingTitle from "../../shared/HeadingTitle";
import CastAndCrewCard from "./CastAndCrewCard";
import { useAppSelector } from "@/src/redux/hooks";
import Link from "next/link";

const CastAndCrew = ({ handleChange }: any) => {
  const mediaDetailsData = useAppSelector(
    (state) => state.mediaDetailsReducer.mediaDetailsData
  );
  const creditsData = useAppSelector(
    (state) => state.mediaDetailsReducer.creditsData
  );

  return (
    <Box>
      <Box sx={{ backgroundColor: "#032541" }}>
        <Container maxWidth="xl">
          <HeadingTitle
            posterPath={mediaDetailsData?.poster_path}
            name={mediaDetailsData?.title}
            handleChange={handleChange}
            color="#FFFFFF !important"
          />
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ paddingY: "30px" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ marginBottom: { xs: "30px" } }}
          >
            <Typography
              sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "20px" }}
            >
              Cast{" "}
              <Box sx={{ fontWeight: 400, display: "inline", opacity: 0.6 }}>
                {(creditsData &&
                  creditsData?.cast?.length > 0 &&
                  creditsData?.cast?.length) ||
                  "N/A"}
              </Box>
            </Typography>
            {creditsData &&
              creditsData?.cast?.length > 0 &&
              creditsData?.cast?.map((item) => (
                <CastAndCrewCard
                  key={item?.id}
                  id={item?.id}
                  name={item?.name}
                  character={item?.character}
                  posterPath={item?.profile_path}
                />
              ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "20px" }}
            >
              Crew{" "}
              <Box sx={{ fontWeight: 400, display: "inline", opacity: 0.6 }}>
                {(creditsData &&
                  creditsData?.crew?.length > 0 &&
                  creditsData?.crew?.length) ||
                  "N/A"}
              </Box>
            </Typography>
            {creditsData &&
              creditsData?.crew?.length > 0 &&
              creditsData?.crew?.map((item) => (
                <CastAndCrewCard
                  key={item?.id}
                  id={item?.id}
                  name={item?.name}
                  character={item?.job}
                  posterPath={item?.profile_path}
                />
              ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CastAndCrew;
