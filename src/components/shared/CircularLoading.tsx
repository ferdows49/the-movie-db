"use client";

import React from 'react';
import { Grid, CircularProgress } from "@mui/material";


const CircularLoading = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Grid>
    </Grid>
  )
}

export default CircularLoading