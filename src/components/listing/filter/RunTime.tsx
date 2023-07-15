"use client";

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useAppDispatch } from "@/src/redux/hooks";
import { filterByRuntime } from "@/src/redux/listing/listingSlice";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "400",
  },
];

const RunTime = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<number[]>([0, 400]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(filterByRuntime(newValue as number[]));
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Runtime</Typography>
      <Slider
        getAriaLabel={() => "Runtime"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={15}
        marks={marks}
        min={0}
        max={400}
        sx={{color: "#01B4E4"}}
      />
    </Box>
  );
};

export default RunTime;
