"use client";

import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Keywords = () => {
  return (
    <Box>
      <Typography sx={{ marginBottom: "8px" }}>Keywords</Typography>
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
      />
    </Box>
  );
};

export default Keywords;
