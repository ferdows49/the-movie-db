import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import OverviewBgImage from "../../../assets/images/overview-bg-image.jpg";
import OverviewBannerActionButtons from "./banner-action-buttons/OverviewBannerActionButtons";
import { useAppSelector } from "@/src/redux/hooks";
import { UrlConfig } from "@/src/config/UrlConfig";
import { format } from "date-fns";

const OverviewBanner = () => {
  const mediaDetailsData = useAppSelector(
    (state) => state.mediaDetailsReducer.mediaDetailsData
  );
  const creditsData = useAppSelector(
    (state) => state.mediaDetailsReducer.creditsData
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {mediaDetailsData?.backdrop_path ? (
          <Image
            height={500}
            width={1000}
            src={`${UrlConfig.IMAGE_BASE_URL}${mediaDetailsData?.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            height={1000}
            width={500}
            src={OverviewBgImage}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 1,
          position: "relative",
          background:
            "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%) !important",
          paddingY: "30px",
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid item md={3}>
            <Box sx={{ height: "450px !important" }}>
              {mediaDetailsData?.poster_path ? (
                <Image
                  height={500}
                  width={500}
                  src={`${UrlConfig.IMAGE_BASE_URL}${mediaDetailsData?.poster_path}`}
                  alt=""
                  className="w-full h-full rounded-lg object-cover"
                />
              ) : (
                <Image
                  height={500}
                  width={500}
                  src={OverviewBgImage}
                  alt=""
                  className="w-full h-full rounded-lg object-cover"
                />
              )}
            </Box>
          </Grid>

          <Grid item md={9}>
            <Box sx={{ marginBottom: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "35px",
                    fontWeight: 700,
                    marginRight: "10px",
                  }}
                >
                  {mediaDetailsData?.title}
                </Typography>
                <Typography
                  sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "35px" }}
                >
                  {`(${mediaDetailsData?.release_date?.slice(0, 4)})`}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    borderRadius: "2px",
                    marginRight: "10px",
                    paddingX: "4px",
                    paddingY: "2px",
                  }}
                >
                  {mediaDetailsData?.spoken_languages &&
                    mediaDetailsData?.spoken_languages?.length > 0 &&
                    mediaDetailsData?.spoken_languages[0]?.name}
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }}>
                  {`${
                    mediaDetailsData?.release_date &&
                    format(
                      new Date(mediaDetailsData?.release_date),
                      "MM/dd/yyyy"
                    )
                  }`}
                </Typography>
                <FiberManualRecordIcon
                  sx={{ color: "#FFFFFF", fontSize: "8px", marginX: "5px" }}
                />
                <Typography sx={{ color: "#FFFFFF" }}>
                  {mediaDetailsData?.genres?.map((el) => el?.name)?.join(", ")}
                </Typography>
                <FiberManualRecordIcon
                  sx={{ color: "#FFFFFF", fontSize: "8px", marginX: "5px" }}
                />
                <Typography sx={{ color: "#FFFFFF" }}>
                  {`${Math.floor(mediaDetailsData?.runtime / 60)}h ${
                    mediaDetailsData?.runtime % 60
                  }m`}
                </Typography>
              </Box>
            </Box>

            <OverviewBannerActionButtons />

            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontStyle: "italic",
                }}
              >
                {mediaDetailsData?.tagline}
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  marginTop: "10px",
                  marginBottom: "8px",
                  fontSize: "21px",
                  fontWeight: 600,
                }}
              >
                Overview
              </Typography>
              <Typography sx={{ color: "#FFFFFF", marginBottom: "20px" }}>
                {mediaDetailsData?.overview}
              </Typography>
            </Box>

            <Grid container rowSpacing={2}>
              {creditsData?.crew &&
                creditsData?.crew?.length > 0 &&
                creditsData?.crew?.map(
                  (item) =>
                    (item?.job === "Director" ||
                      item?.job === "Writer" ||
                      item?.job === "Characters") && (
                      <Grid item md={4} key={item?.id}>
                        <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                          {item?.name}
                        </Typography>
                        <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                          {item?.job}
                        </Typography>
                      </Grid>
                    )
                )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OverviewBanner;
