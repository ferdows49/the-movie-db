import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useAppDispatch } from "@/src/redux/hooks";
import { filterByUserScore } from "@/src/redux/listing/listingSlice";

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9
  },
  {
    value: 10,
    label: '10',
  },
];


const UserScore = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<number[]>([0, 10]);  

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(filterByUserScore(newValue as number[]));
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>User Score</Typography>
      <Slider
        getAriaLabel={() => "User Score"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={10}
        sx={{color: "#01B4E4"}}
      />
    </Box>
  );
};

export default UserScore;
