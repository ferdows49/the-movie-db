"use client";

import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { filterByKeyWoard } from "@/src/redux/listing/listingSlice";

const Keywords = () => {

  const storeKeyword = useAppSelector(state => state.listingReducer.filterParams.keyword);
  const dispatch = useAppDispatch();

  const [keyword, setKeyWord] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
    dispatch(filterByKeyWoard(e.target.value));
  }

  useEffect(() => {
    if (keyword) {
      dispatch(filterByKeyWoard(keyword));
    }
  }, [storeKeyword]);

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Keywords</Typography>
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
        value={keyword}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Keywords;
