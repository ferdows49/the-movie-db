import React from "react";
import { Box, Typography, Card, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import PersonImageNotFound from "../../../../assets/images/person-image-not found.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CustomTooltip from "@/src/components/shared/CustomTooltip";

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
  externalIdsData: {
    facebook_id: "string" | null;
    instagram_id: "string" | null;
    twitter_id: "string" | null;
    youtube_id: "string" | null;
  };
  knownCredits: number;
};

const PersonalInfo = ({
  personDetailsData,
  externalIdsData,
  knownCredits,
}: PropsType) => {
  return (
    <Grid container sx={{ marginBottom: "20px" }}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: {
              xs: "150px",
              sm: "150px",
              md: "100%",
            },
            width: {
              xs: "150px",
              sm: "150px",
              md: "100%",
            },
            borderRadius: "10px",
            cursor: "pointer",
            objectFit: "cover",
          }}
        >
          {personDetailsData?.profile_path ? (
            <Image
              width={500}
              height={500}
              src={`${UrlConfig.IMAGE_BASE_URL}${personDetailsData?.profile_path}`}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <Image width={500} height={500} src={PersonImageNotFound} alt="" />
          )}
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
          },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            marginTop: "15px",
            marginBottom: "10px",
          }}
        >
          {personDetailsData?.name}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        {(externalIdsData?.facebook_id ||
          externalIdsData?.twitter_id ||
          externalIdsData?.instagram_id ||
          externalIdsData?.youtube_id) && (
          <Box
            sx={{
              marginTop: {
                md: "30px",
              },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "start",
              },
            }}
          >
            {externalIdsData?.facebook_id && (
              <Link
                href={`${UrlConfig.FACEBOOK_URL}${externalIdsData?.facebook_id}`}
                target="_blank"
              >
                <CustomTooltip title="Visit Facebook">
                  <FacebookOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 40,
                        lg: 40,
                      },
                    }}
                  />
                </CustomTooltip>
              </Link>
            )}

            {externalIdsData?.twitter_id && (
              <Link
                href={`${UrlConfig.TWITTER_URL}${externalIdsData?.twitter_id}`}
                target="_blank"
              >
                <CustomTooltip title="Visit Twitter">
                  <TwitterIcon
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 40,
                        lg: 40,
                      },
                      marginLeft: `${
                        externalIdsData?.facebook_id ? "15px" : "0px"
                      }`,
                    }}
                  />
                </CustomTooltip>
              </Link>
            )}

            {externalIdsData?.instagram_id && (
              <Link
                href={`${UrlConfig.INSTAGRAM_URL}${externalIdsData?.instagram_id}`}
                target="_blank"
              >
                <CustomTooltip title="Visit Instagram">
                  <InstagramIcon
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 40,
                        lg: 40,
                      },
                      marginLeft: `${
                        externalIdsData?.facebook_id ||
                        externalIdsData?.twitter_id
                          ? "15px"
                          : "0px"
                      }`,
                    }}
                  />
                </CustomTooltip>
              </Link>
            )}

            {externalIdsData?.youtube_id && (
              <Link
                href={`${UrlConfig.YOUTUBE_URL}${externalIdsData?.youtube_id}`}
                target="_blank"
              >
                <CustomTooltip title="Visit Youtube">
                  <YouTubeIcon
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 40,
                        lg: 40,
                      },
                      marginLeft: `${
                        externalIdsData?.facebook_id ||
                        externalIdsData?.twitter_id ||
                        externalIdsData?.instagram_id
                          ? "15px"
                          : "0px"
                      }`,
                    }}
                  />
                </CustomTooltip>
              </Link>
            )}
          </Box>
        )}
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ marginTop: "30px" }}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}
          >
            Personal Info
          </Typography>

          {personDetailsData?.known_for_department && (
            <>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Known For
              </Typography>
              <Typography sx={{ fontSize: "16px", marginBottom: "20px" }}>
                {personDetailsData?.known_for_department}
              </Typography>{" "}
            </>
          )}

          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Known Credits
          </Typography>
          <Typography sx={{ fontSize: "16px", marginBottom: "20px" }}>
            {knownCredits}
          </Typography>

          {personDetailsData?.gender && (
            <>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Gender
              </Typography>
              <Typography sx={{ fontSize: "16px", marginBottom: "20px" }}>
                {(personDetailsData?.gender === 1 && "Female") ||
                  (personDetailsData?.gender === 2 && "Male")}
              </Typography>
            </>
          )}

          {personDetailsData?.birthday && (
            <>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Birth Date
              </Typography>
              <Typography sx={{ fontSize: "16px", marginBottom: "20px" }}>
                {`${personDetailsData?.birthday} (${
                  new Date().getFullYear() -
                  new Date(personDetailsData?.birthday).getFullYear()
                } Years old)`}
              </Typography>
            </>
          )}

          {personDetailsData?.place_of_birth && (
            <>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Place of Birth
              </Typography>
              <Typography sx={{ fontSize: "16px", marginBottom: "20px" }}>
                {personDetailsData?.place_of_birth}
              </Typography>
            </>
          )}

          {personDetailsData?.also_known_as?.length > 0 && (
            <>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Also Known As
              </Typography>{" "}
              {personDetailsData?.also_known_as?.map((item) => (
                <Typography sx={{ fontSize: "16px" }}>{item}</Typography>
              ))}
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
