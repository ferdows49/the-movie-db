import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import TrendingBgImage from "../../assets/images/trending-bg-image.svg";
import TitleWithButton from "./shared/TitleWithButton";
import ItemCard from "../shared/card/ItemCard";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import axios from "axios";

type PropsType = {
  trendingAllData: {
    results: {
      id: number;
      backdrop_path: string;
      title: string;
      name: string;
      poster_path: string;
      media_type: string;
      release_date: string;
      first_air_date: string;
      vote_average: number;
    }[];
  };
};

const Trending = ({ trendingAllData }: PropsType) => {
  const [trendingType, setTrendingType] = useState<string>("Today");
  const [currentData, setCurrentData] =
    useState<PropsType["trendingAllData"]>();

  useEffect(() => {
    const getData = async () => {
      let url;
      if (trendingType === "Today") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/day?api_key=${UrlConfig.API_KEY}`;
      } else {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_ALL_TRENDING}/week?api_key=${UrlConfig.API_KEY}`;
      }

      if (trendingType) {
        const trendingAllResponse = await axios.get(url);
        const trendingAllData = await trendingAllResponse.data;
        setCurrentData(trendingAllData);
      }
    };
    getData();
  }, [trendingType]);

  useEffect(() => {
    if (trendingAllData) {
      setCurrentData(trendingAllData);
    }
  }, [trendingAllData]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "474px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          bottom: {
            xs: 200,
            sm: 200,
            md: 0,
            lg: 0,
          },
        }}
      >
        <Image
          src={TrendingBgImage}
          alt=""
          height={300}
          width={2500}
          className="h-full w-full object-cover"
        />
      </Box>
      <Container maxWidth="xl" sx={{ zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <TitleWithButton
              title="Trending"
              titleColor="#000000"
              buttonColorActive="#39DBAF"
              buttonColorInActive="#032541"
              buttonBorderColor="#032541"
              buttonBgColorActive="#032541"
              buttonBgColorInActive="rgba(0, 0, 0, 0)"
              buttonType={trendingType}
              setButtonType={setTrendingType}
              leftButtonName="Today"
              rightButtonName="This Week"
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
                currentData?.results?.map((item) => (
                  <Grid item>
                    <ItemCard
                      key={item?.id}
                      title={item?.title || item?.name}
                      posterPath={item?.poster_path}
                      releaseDate={item?.release_date || item?.first_air_date}
                      voteAverage={item?.vote_average}
                      roundedImage={true}
                      fromHome={true}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Trending;
