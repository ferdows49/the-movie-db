"use client";

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

const MinimumVotes = () => {
  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Runtime</Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  );
};

export default MinimumVotes;
