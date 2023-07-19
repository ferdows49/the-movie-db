import React from "react";
import CustomContainer from "@/src/components/shared/CustomContainer";
import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import PersonImageNotFound from "../../../../assets/images/tom_cr.jpg";
import PersonMediaCard from "./PersonMediaCard";
import { UrlConfig } from "@/src/config/UrlConfig";

type PropsType = {
  personImageData: {
    id: number;
    profiles: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
  };
  handleChange: any;
  name: string;
};

const PersonMedia = ({ personImageData, handleChange, name }: PropsType) => {
  return (
    <CustomContainer>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ display: "flex" }}>
            {personImageData?.profiles?.length > 0 &&
            personImageData?.profiles[0]?.file_path ? (
              <Image
                width={500}
                height={500}
                src={`${UrlConfig.IMAGE_BASE_URL}${personImageData?.profiles[0]?.file_path}`}
                alt=""
                className="w-20 h-24 rounded-md object-cover cursor-pointer"
              />
            ) : (
              <Image
                width={500}
                height={500}
                src={PersonImageNotFound}
                alt=""
                className="w-20 h-24 rounded-md object-cover cursor-pointer"
              />
            )}
            <Box sx={{ marginLeft: "20px" }}>
              <Typography sx={{ fontSize: "26px", fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#01b4e4",
                  cursor: "pointer",
                }}
                onClick={(e) => handleChange(e, "1")}
              >
                <ArrowBackIcon />
                Back to main
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <PersonMediaCard personImageData={personImageData} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default PersonMedia;
