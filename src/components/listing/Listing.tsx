"use client";

import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import ItemCard from "./ItemCard";

type ListPropsType = {
  data: any,
  type: string,
  slug: string,
  sortBy: string
}

const Listing = ({data, type, slug, sortBy}: ListPropsType) => {
  return (
    <Box className="p-4 sm:p-6 md:p-10 bg-slate-100 bg-opacity-8" sx={{ minHeight: "90vh" }}>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          {/* <SearchBar sortBy={sortBy} /> */}
          <SearchBar />
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          <ItemCard data={data} type={type} slug={slug} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Listing;
