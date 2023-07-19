import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type PropsType = {
  name: string;
  biography: string;
};

const PersonHeadingInfo = ({ name, biography }: PropsType) => {
  const [biographyHeight, setBiographyHeight] = useState<string>("220px");

  return (
    <>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: 700,
          marginBottom: "30px",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
          },
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}
      >
        Biography
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            height: biographyHeight,
            overflow: "hidden",
          }}
          variant="body1"
        >
          {biography}
        </Typography>
        {biographyHeight !== "100%" && (
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              width: "100%",
              height: "32px",
              textAlign: "right",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#00B5E7",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <span
              className="inline-block h-full bg-white px-3 bg-opacity-90 cursor-pointer"
              onClick={() => setBiographyHeight("100%")}
            >
              Read more <ArrowRightAltIcon />
            </span>
          </Typography>
        )}
      </Box>
    </>
  );
};

export default PersonHeadingInfo;
