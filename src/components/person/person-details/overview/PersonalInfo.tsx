import React from "react";
import { Box, Typography, Card, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import PersonImageNotFound from "../../../../assets/images/person-image-not found.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import SocialMediaLink from "@/src/components/shared/SocialMediaLink";

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
    homepage: string;
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
          marginBottom: {
            md: "30px",
          },
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
        <SocialMediaLink
          facebookId={externalIdsData?.facebook_id}
          twitterId={externalIdsData?.twitter_id}
          instagramId={externalIdsData?.instagram_id}
          youtubeId={externalIdsData?.youtube_id}
          website={personDetailsData?.homepage}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Box>
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
