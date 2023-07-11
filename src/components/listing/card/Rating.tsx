"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Rating = ({voteAverage}: any) => {

  let color;

  if (Math.round((voteAverage / 10) * 100) >= 75) {
    color = "#4caf50"
  } else if (Math.round((voteAverage / 10) * 100) < 75 && Math.round((voteAverage / 10) * 100) > 30) {
    color = "#ffc107"
  } else {
    color = "#f4511e"
  }

  return (
    <Box className="h-10 w-10 bg-black rounded-full relative inline-flex">
      <CircularProgress
        sx={{
          color: color,
          opacity: "0.8"
        }}
        variant="determinate"
        value={Math.round((voteAverage / 10) * 100)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          className="text-slate-100"
        >{`${Math.round((voteAverage / 10) * 100)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default Rating;
