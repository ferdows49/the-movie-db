"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { useAppDispatch } from "@/src/redux/hooks";
import { useGetLanguagesQuery } from "@/src/redux/listing/movieApi";
import { filterByLanguage } from "@/src/redux/listing/listingSlice";

type ItemTypes = {
  english_name: string;
};

const Language = () => {
  const { data } = useGetLanguagesQuery("");

  const dispatch = useAppDispatch();

  const [language, setLanguage] = useState<string>("");
  const [allLanguage, setAllLanguage] = useState<string[]>([]);

  const handleChange = (event: any, newValue: string | null) => {
    if (newValue === null) {
      setLanguage("");
      dispatch(filterByLanguage(""));
    } else {
      setLanguage(newValue);
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
