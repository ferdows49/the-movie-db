"use client";

import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import ItemCard from "./ItemCard";

type ListPropsType = {
  data: any,
  slug: string
}

const Listing = ({data, slug}: ListPropsType) => {
  return (
    <Box className="p-4 sm:p-6 md:p-10 bg-slate-100 bg-opacity-8" sx={{ minHeight: "90vh" }}>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <SearchBar />
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          <ItemCard data={data} slug={slug} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Listing;
