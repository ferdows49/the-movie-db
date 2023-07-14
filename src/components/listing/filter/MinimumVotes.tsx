"use client";

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { filterByMinimumVots } from "@/src/redux/listing/listingSlice";
import { useAppDispatch } from "@/src/redux/hooks";

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
  {
    value: 500,
    label: "500",
  },
];

const MinimumVotes = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<number | number[]>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
    dispatch(filterByMinimumVots(newValue));
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Minimum User Votes</Typography>
      <Slider
        aria-label="Temperature"
        value={value}
        onChange={handleChange}
        defaultValue={0}
        valueLabelDisplay="auto"
        step={50}
        marks={marks}
        min={0}
        max={500}
        sx={{ color: "#01B4E4" }}
      />
    </Box>
  );
};

export default MinimumVotes;
