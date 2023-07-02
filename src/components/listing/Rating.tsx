"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

const Rating = () => {
  return (
    <Box className="h-10 w-10 bg-black rounded-full relative inline-flex">
      <CircularProgress
        sx={{
          color: green[500],
        }}
        variant="determinate"
        value={75}
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
        >{`75%`}</Typography>
      </Box>
    </Box>
  );
};

export default Rating;
