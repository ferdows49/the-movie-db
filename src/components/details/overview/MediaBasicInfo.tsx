import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SocialMediaLink from "../../shared/SocialMediaLink";
import { useAppSelector } from "@/src/redux/hooks";

const MediaBasicInfo = () => {
  const mediaDetailsData = useAppSelector(
    (state) => state.mediaDetailsReducer.mediaDetailsData
  );
  const externalIdsData = useAppSelector(
    (state) => state.mediaDetailsReducer.externalIdsData
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <SocialMediaLink
          facebookId={externalIdsData?.facebook_id}
          twitterId={externalIdsData?.twitter_id}
          instagramId={externalIdsData?.instagram_id}
          youtubeId={null}
          website={mediaDetailsData?.homepage}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Orginal Title</Typography>
          <Typography>{`${
            mediaDetailsData?.original_title
              ? mediaDetailsData?.original_title
              : "-"
          }`}</Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Status</Typography>
          <Typography>{`${
            mediaDetailsData?.status ? mediaDetailsData?.status : "-"
          }`}</Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Orginal Language</Typography>
          <Typography>
            {mediaDetailsData?.original_language
              ? mediaDetailsData?.spoken_languages?.find(
                  (item) =>
                    item?.iso_639_1 === mediaDetailsData?.original_language &&
                    item?.name
                )?.name || "-"
              : "-"}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Budget</Typography>
          <Typography>{`${
            mediaDetailsData?.budget ? mediaDetailsData?.budget : "-"
          }`}</Typography>
        </Box>

        <Box>
          <Typography>Revinue</Typography>
          <Typography>{`${
            mediaDetailsData?.revenue ? mediaDetailsData?.revenue : "-"
          }`}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MediaBasicInfo;
