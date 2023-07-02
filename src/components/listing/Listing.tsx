"use client";

import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import ItemCard from "./ItemCard";

const Listing = () => {
  return (
    <Box className="p-10 bg-slate-100 bg-opacity-8">
      <Grid container columnSpacing={3}>
        <Grid item md={3}>
          <SearchBar />
        </Grid>

        <Grid item md={9}>
          <ItemCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Listing;
