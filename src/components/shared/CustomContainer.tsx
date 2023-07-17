"use client";

import React, { ReactNode } from "react";
import { Container } from "@mui/material";

const CustomContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      maxWidth="xl"
      // className="py-6 sm:px-6 md:px-10 bg-slate-50 bg-opacity-8"
      className="py-6 bg-slate-50 bg-opacity-8"
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
