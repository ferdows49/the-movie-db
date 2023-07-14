"use client";

import React, { useEffect, useState } from "react";
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
  const isFilterParams = useAppSelector(
    (state) => state.listingReducer.isFilterParams
  );

  const sortBy = useAppSelector(
    (state) => state.listingReducer.filterParams.sortBy
  );

  const dispatch = useAppDispatch();

  // const [sortBy, setSortBy] = useState<string>("");
  // console.log("sortBy", sortBy);

  const handleChange = (event: any, newValue: string | null) => {
    if (newValue !== null) {
      let params = "";

      if (newValue === "Popularity Descending") {
        params = "popularity.desc";
      } else if (newValue === "Popularity Ascending") {
        params = "popularity.asc";
      } else if (newValue === "Rating Descending") {
        params = "vote_average.desc";
      } else if (newValue === "Rating Ascending") {
        params = "vote_average.asc";
      } else if (newValue === "Release Date Descending") {
        params = "primary_release_date.desc";
      } else if (newValue === "Release Date Ascending") {
        params = "primary_release_date.asc";
      } else if (newValue === "Revenue Descending") {
        params = "revenue.desc";
      } else if (newValue === "Revenue Ascending") {
        params = "revenue.asc";
      }

      // setSortBy(newValue);
      dispatch(sortResultBy(params));
    } else {
      // setSortBy("");
      dispatch(sortResultBy(""));
    }
  };

  // useEffect(() => {
  //   if (!isFilterParams) {
  //     setSortBy("");
  //   }
  // }, [isFilterParams]);

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
