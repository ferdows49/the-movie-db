import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import PersonImageNotFound from "../../../../assets/images/person-image-not found.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";

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
};

const PersonMediaCard = ({ personImageData }: PropsType) => {
  return (
    <Grid
      container
      spacing={3.5}
      sx={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      {personImageData &&
        personImageData?.profiles?.length > 0 &&
        personImageData?.profiles?.map((item, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index + 1}>
            <Card>
              <CardActionArea>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                >
                  {item?.file_path ? (
                    <Link
                      href={`${UrlConfig.IMAGE_BASE_URL}${item?.file_path}`}
                      target="_blank"
                    >
                      <Image
                        width={500}
                        height={500}
                        src={`${UrlConfig.IMAGE_BASE_URL}${item?.file_path}`}
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      src={PersonImageNotFound}
                      alt=""
                    />
                  )}
                </Box>
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "16px", fontWeight: 400, padding: "14px" }}
                  >
                    Info
                  </Typography>
                  <Divider />
                  <Box sx={{ padding: "14px" }}>
                    <Typography sx={{ fontSize: "13px" }}>Size</Typography>
                    {item?.height && item?.width ? (
                      <>
                        <Typography sx={{ fontSize: "16px" }}>
                          {item?.width} <CloseIcon sx={{ fontSize: 16 }} />{" "}
                          {item?.height}
                        </Typography>
                      </>
                    ) : (
                      <Typography sx={{ fontSize: "16px" }}>N/A</Typography>
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default PersonMediaCard;
