"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { UrlConfig } from "@/src/config/UrlConfig";
import { format } from "date-fns";
import Options from "./Options";
import Rating from "./Rating";

type ItemCardPropsType = {
  posterPath: string;
  voteAverage: number;
  title: string;
  releaseDate: Date | string;
};

const ItemCard = ({
  posterPath,
  voteAverage,
  title,
  releaseDate,
}: ItemCardPropsType) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="rounded-lg shadow-md">
        <Box className="relative" sx={{ height: "320px" }}>
          <Link href="/">
            <Image
              width={500}
              height={280}
              src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
              alt=""
              className="w-full h-full cursor-pointer"
            />
          </Link>
          <Box className="absolute top-3 right-3">
            <Options />
          </Box>
          <Box className="absolute left-3 bottom-[-26px]">
            <Rating voteAverage={voteAverage} />
          </Box>
        </Box>
        <CardContent className="pt-8 !pb-4 h-32 min-h-full">
          <Link href="/">
            <Typography
              className="text-base font-bold text-black cursor-pointer"
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          </Link>

          {releaseDate && (
            <Typography
              className="text-base font-normal text-black opacity-60 mb-0"
              gutterBottom
              variant="h5"
              component="div"
            >
              {format(new Date(releaseDate), "dd MMM yyyy")}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemCard;
