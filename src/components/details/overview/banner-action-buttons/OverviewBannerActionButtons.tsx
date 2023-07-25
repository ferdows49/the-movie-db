import React from "react";
import { Box, Typography } from "@mui/material";
import RatingWithDialog from "./RatingWithDialog";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import PlayTailorDialog from "./PlayTailorDialog";

const customIconBoxStyle = {
  marginRight: "20px",
  height: "46px",
  width: "46px",
  borderRadius: "50%",
  color: "#FFFFFF",
  backgroundColor: "#032541",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const OverviewBannerActionButtons = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <Box sx={{ marginRight: "20px", display: "flex", alignItems: "center" }}>
        <RatingWithDialog />
        <Typography sx={{ marginLeft: "6px", color: "#FFFFFF" }}>
          User <br /> Score
        </Typography>
      </Box>
      <Box sx={customIconBoxStyle}>
        <FormatListBulletedIcon />
      </Box>
      <Box sx={customIconBoxStyle}>
        <FavoriteIcon />
      </Box>
      <Box sx={customIconBoxStyle}>
        <BookmarkIcon />
      </Box>
      <Box sx={customIconBoxStyle}>
        <StarIcon />
      </Box>
      <PlayTailorDialog />
    </Box>
  );
};

export default OverviewBannerActionButtons;
