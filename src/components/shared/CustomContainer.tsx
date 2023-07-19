"use client";

import React, { ReactNode } from "react";
import { Container } from "@mui/material";

const CustomContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      maxWidth="xl"
      // className="py-6 sm:px-6 md:px-10 bg-slate-50 bg-opacity-8"
      className="py-6 bg-slate-50 bg-opacity-8"
      // sx={{
      //   paddingTop: "24px",
      //   paddingBottom: "24px",
      //   paddingRight: {
      //     xs: 0,
      //     sm: "24px",
      //     md: "24px",
      //     lg: "24px",
      //   },
      //   paddingLeft: {
      //     xs: 0,
      //     sm: "24px",
      //     md: "24px",
      //     lg: "24px",
      //   },
      // }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
