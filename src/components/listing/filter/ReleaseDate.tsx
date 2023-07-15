import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
  filterByReleaseFromDate,
  filterByReleaseToDate,
} from "@/src/redux/listing/listingSlice";

const ReleaseDate = () => {
  const { releaseFromDate, releaseToDate } = useAppSelector(
    (state) => state.listingReducer.filterParams
  );

  const dispatch = useAppDispatch();

  const [releaseDateFromFormat, setReleaseDateFromFormat] =
    React.useState<string>("__/__/____");
  const [releaseDateTOFormat, setReleaseDateTOFormat] =
    React.useState<string>("__/__/____");

  const releseDateFromHandler = (value: Date | null) => {
    if (value) {
      let dateObj = new Date(value);
      let year = dateObj.getUTCFullYear();
      let month = ("0" + (dateObj.getUTCMonth() + 1)).slice(-2);
      let day = ("0" + dateObj.getUTCDate()).slice(-2);
      let formattedDate = year + "-" + month + "-" + day;
      dispatch(filterByReleaseFromDate(formattedDate));
    }
  };

  const releseDateToHandler = (value: Date | null) => {
    if (value) {
      let dateObj = new Date(value);
      let year = dateObj.getUTCFullYear();
      let month = ("0" + (dateObj.getUTCMonth() + 1)).slice(-2);
      let day = ("0" + dateObj.getUTCDate()).slice(-2);
      let formattedDate = year + "-" + month + "-" + day;
      dispatch(filterByReleaseToDate(formattedDate));
    }
  };

  useEffect(() => {
    if (releaseFromDate) {
      setReleaseDateFromFormat("DD/MM/YYYY");
    } else {
      setReleaseDateFromFormat("__/__/____");
    }
  }, [releaseFromDate]);

  useEffect(() => {
    if (releaseToDate) {
      setReleaseDateTOFormat("DD/MM/YYYY");
    } else {
      setReleaseDateTOFormat("__/__/____");
    }
  }, [releaseToDate]);

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Release Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
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
