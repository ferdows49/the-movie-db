import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import WhatsPopularBgImage from "../../assets/images/trending-bg-image.svg";
import TitleWithButton from "./shared/TitleWithButton";
import ItemCard from "../shared/card/ItemCard";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import axios from "axios";

type PropsType = {
  whatsPopularData: {
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

const WhatsPopular = ({ whatsPopularData }: PropsType) => {
  const [whatsPopularType, setWhatsPopularType] = useState<string>("On TV");
  const [currentData, setCurrentData] =
    useState<PropsType["whatsPopularData"]>();

  useEffect(() => {
    const getData = async () => {
      let url;
      if (whatsPopularType === "On TV") {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_TV_SHOWS}?api_key=${UrlConfig.API_KEY}`;
      } else {
        url = `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_MOVIES}?api_key=${UrlConfig.API_KEY}`;
      }

      if (whatsPopularType) {
        const whatsPopularResponse = await axios.get(url);
        const whatsPopularData = await whatsPopularResponse.data;
        setCurrentData(whatsPopularData);
      }
    };
    getData();
  }, [whatsPopularType]);

  useEffect(() => {
    if (whatsPopularData) {
      setCurrentData(whatsPopularData);
    }
  }, [whatsPopularData]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "474px",
      }}
    >
      <Box sx={{ backgroundColor: "#29495B", opacity: 1, width: "100%" }}>
        <Container maxWidth="xl" sx={{ zIndex: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <TitleWithButton
                title="What's Popular"
                titleColor="#FFFFFF"
                buttonColorActive="#032541"
                buttonColorInActive="#FFFFFF"
                buttonBorderColor="#39DBAF"
                buttonBgColorActive="#39DBAF"
                buttonBgColorInActive="rgba(0, 0, 0, 0)"
                buttonType={whatsPopularType}
                setButtonType={setWhatsPopularType}
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
                  currentData?.results?.map((item) => (
                    <Grid item>
                      <ItemCard
                        key={item?.id}
                        textWhite={true}
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
    </Box>
  );
};

export default WhatsPopular;
