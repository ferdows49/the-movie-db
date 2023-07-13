"use client";

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

const RunTime = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Runtime</Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  );
};

export default RunTime;
