import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SocialMediaLink from "../../shared/SocialMediaLink";

const MediaBasicInfo = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <SocialMediaLink
          facebookId={"sdfsfdf"}
          twitterId={"sdfsfdf"}
          instagramId={"sdfsfdf"}
          youtubeId={"sdfsfdf"}
          website={"sdfsfdf"}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Orginal Title</Typography>
          <Typography>muiTy</Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Status</Typography>
          <Typography>muiTy</Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Orginal Language</Typography>
          <Typography>muiTy</Typography>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: 600 }}>Budget</Typography>
          <Typography>muiTy</Typography>
        </Box>

        <Box>
          <Typography>Revinue</Typography>
          <Typography>muiTy</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MediaBasicInfo;
