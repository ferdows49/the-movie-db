import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { filterByKeyWoard } from "@/src/redux/listing/listingSlice";

const Keywords = React.memo(() => {
  const { keyword } = useAppSelector(
    (state) => state.listingReducer.filterParams
  );

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByKeyWoard(e.target.value));
  };

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
});

export default Keywords;
