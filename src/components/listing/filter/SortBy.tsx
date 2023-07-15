import React from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { sortResultBy } from "@/src/redux/listing/listingSlice";

const sortByTypes = [
  "Popularity Descending",
  "Popularity Ascending",
  "Rating Descending",
  "Rating Ascending",
  "Release Date Descending",
  "Release Date Ascending",
  "Revenue Descending",
  "Revenue Ascending",
];

const SortBy = () => {
  const sortBy = useAppSelector(
    (state) => state.listingReducer.filterParams.sortBy
  );

  const dispatch = useAppDispatch();

  const handleChange = (event: any, newValue: string | null) => {
    if (newValue !== null) {
      dispatch(sortResultBy(newValue));
    }
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Sort Result</Typography>
      <Autocomplete
        disablePortal
        options={sortByTypes}
        value={sortBy}
        onChange={handleChange}
        sx={{ width: "-webkit-fill-available" }}
        renderInput={(params) => (
          <TextField {...params} label="Sort by" size="small" />
        )}
      />
    </Box>
  );
};

export default SortBy;
