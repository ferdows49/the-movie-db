"use client";

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch } from "@/src/redux/hooks";
import {
  releaseFromDate,
  releaseToDate,
} from "@/src/redux/listing/listingSlice";

const ReleaseDate = () => {
  const dispatch = useAppDispatch();
  
  const [releaseDateFrom, setReleaseDateFrom] = React.useState<Date | null>(
    null
  );
  const [releaseDateTO, setReleaseDateTO] = React.useState<Date | null>(null);
  const [releaseDateFromFormat, setReleaseDateFromFormat] =
    React.useState<string>("__/__/____");
  const [releaseDateTOFormat, setReleaseDateTOFormat] =
    React.useState<string>("__/__/____");

  const releseDateFromHandler = (value: Date | null) => {
    setReleaseDateFrom(value);
    dispatch(releaseFromDate(value));
  };

  const releseDateToHandler = (value: Date | null) => {
    setReleaseDateTO(value);
    dispatch(releaseToDate(value));
  };

  useEffect(() => {
    if (releaseDateFrom) {
      setReleaseDateFromFormat("DD/MM/YYYY");
    } else {
      setReleaseDateFromFormat("__/__/____");
    }
  }, [releaseDateFrom]);

  useEffect(() => {
    if (releaseDateTO) {
      setReleaseDateTOFormat("DD/MM/YYYY");
    } else {
      setReleaseDateTOFormat("__/__/____");
    }
  }, [releaseDateTO]);

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Release Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            value={releaseDateFrom}
            format={releaseDateFromFormat}
            onChange={releseDateFromHandler}
            sx={{ width: "-webkit-fill-available", marginBottom: "8px" }}
            label="From"
            slotProps={{ textField: { size: "small" } }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            format={releaseDateTOFormat}
            value={releaseDateTO}
            onChange={releseDateToHandler}
            sx={{ width: "-webkit-fill-available" }}
            label="To"
            slotProps={{ textField: { size: "small" } }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default ReleaseDate;
