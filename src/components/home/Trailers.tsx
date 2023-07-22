import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import TrailerBgImage from "../../assets/images/trending-bg-image.svg";
import TitleWithButton from "./shared/TitleWithButton";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import axios from "axios";

type PropsType = {
  latestMovieData: {
    results: {
      id: number;
    }[];
  };
};

const Trailers = ({ latestMovieData }: PropsType) => {
  const [trailerType, setTrailerType] = useState<string>("On TV");
  const [currentData, setCurrentData] = useState<any>();

  console.log("currentData", currentData);

  useEffect(() => {
    const getData = async () => {
      let url;
      if (trailerType === "Today") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/day?api_key=${UrlConfig.API_KEY}`;
      } else {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/week?api_key=${UrlConfig.API_KEY}`;
      }

      if (trailerType) {
        const trailerAllResponse = await axios.get(url);
        const trailerAllData = await trailerAllResponse.data;
        setCurrentData(trailerAllData);
      }
    };
    getData();
  }, [trailerType]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "450px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          opacity: 0.4,
          bottom: {
            xs: 200,
            sm: 200,
            md: 0,
            lg: 0,
          },
        }}
      >
        <Image
          src={TrailerBgImage}
          alt=""
          height={300}
          width={2500}
          className="h-full w-full object-cover"
        />
      </Box>
      <Box sx={{ backgroundColor: "#29495B", opacity: 1, width: "100%" }}>
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <TitleWithButton
                title="Trailers"
                titleColor="#FFFFFF"
                buttonColorActive="#032541"
                buttonColorInActive="#FFFFFF"
                buttonBorderColor="#39DBAF"
                buttonBgColorActive="#39DBAF"
                buttonBgColorInActive="rgba(0, 0, 0, 0)"
                buttonType={trailerType}
                setButtonType={setTrailerType}
                leftButtonName="On TV"
                rightButtonName="In Theatres"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid
                container
                columnSpacing={2}
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  overflowY: "hidden",
                  scrollbarWidth: "thin",
                  "&::-webkit-scrollbar": {
                    width: "5px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#DBDBDB",
                    borderRadius: "5px",
                  },
                }}
              >
                {currentData &&
                  currentData?.results?.length > 0 &&
                  currentData?.results?.map(() => <Grid item>aaa</Grid>)}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Trailers;


  // useEffect(() => {
  //   const fetchVideoData = async () => {
  //     if (latestMovieData) {
  //       const videoData = await Promise.all(
  //         latestMovieData.results.map(async (item) => {
  //           if (item?.id) {
  //             const upcommingMovieResponse = await axios.get(
  //               `${UrlConfig.BASE_URL}/movie/${item?.id}/videos?api_key=${UrlConfig.API_KEY}`
  //             );
  //             return upcommingMovieResponse?.data;
  //           }
  //         })
  //       );

  //       setCurrentData(videoData);
  //     }
  //   };

  //   fetchVideoData();
  // }, [latestMovieData]);