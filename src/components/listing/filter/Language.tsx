import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useGetLanguagesQuery } from "@/src/redux/listing/movieApi";
import { filterByLanguage } from "@/src/redux/listing/listingSlice";

type ItemTypes = {
  english_name: string;
};

const Language = () => {
  const language = useAppSelector(
    (state) => state.listingReducer.filterParams.language
  );

  const { data } = useGetLanguagesQuery("");

  const dispatch = useAppDispatch();

  const [allLanguage, setAllLanguage] = useState<string[]>([]);

  const handleChange = (event: any, newValue: string | null) => {
    if (newValue === null) {
      dispatch(filterByLanguage(""));
    } else {
      dispatch(filterByLanguage(newValue));
    }
  };

  useEffect(() => {
    if (data) {
      const language = data?.map((item: ItemTypes) => item?.english_name);
      setAllLanguage(language);
    }
  }, [data]);

  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Language</Typography>
      <Autocomplete
        disablePortal
        options={allLanguage}
        value={language}
        onChange={handleChange}
        sx={{ width: "-webkit-fill-available" }}
        renderInput={(params) => (
          <TextField {...params} label="Language" size="small" />
        )}
      />
    </Box>
  );
};

export default Language;
