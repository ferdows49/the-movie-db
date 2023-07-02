"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CardImage from "../../assets/images/card-image.jpg";
import Image from "next/image";
import Options from "./Options";
import Rating from "./Rating";
import Link from "next/link";

const ItemCard = () => {
  let arr: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Grid container spacing={4}>
      {arr?.map((a) => {
        return (
          <Grid item md={3}>
            <Card className="rounded-lg shadow-md">
              <Box className="relative" sx={{ height: "320px" }}>
                <Link href="/">
                  <Image
                    src={CardImage}
                    alt=""
                    className="w-full h-full cursor-pointer"
                  />
                </Link>
                <Box className="absolute top-3 right-3">
                  <Options />
                </Box>
                <Box className="absolute left-3 bottom-[-26px]">
                  <Rating />
                </Box>
              </Box>
              <CardContent className="pt-8 !pb-4">
                <Link href="/">
                  <Typography
                    className="text-base font-bold text-black cursor-pointer"
                    variant="h5"
                    component="div"
                  >
                    Lizard
                  </Typography>
                </Link>

                <Typography
                  className="text-base font-normal text-black opacity-60 mb-0"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  09 Jun 2023
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemCard;
