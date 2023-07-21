import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { UrlConfig } from "@/src/config/UrlConfig";
import { format } from "date-fns";
import Options from "./Options";
import Rating from "./Rating";
import NotFoundImage from "../../../assets/images/not-found-image.svg";

type ItemCardPropsType = {
  posterPath: string;
  voteAverage: number;
  title: string;
  releaseDate: Date | string;
  roundedImage: boolean;
  fromHome?: boolean;
};

const ItemCard = ({
  posterPath,
  voteAverage,
  title,
  releaseDate,
  roundedImage,
  fromHome = false,
}: ItemCardPropsType) => {
  return (
    <>
      <Box
        className="relative"
        sx={{ height: `${fromHome ? "206px" : "320px"}`, minWidth: "150px" }}
      >
        <Link href="/">
          {posterPath ? (
            <Image
              width={500}
              height={280}
              src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
              alt=""
              className={`w-full h-full ${
                roundedImage && "rounded-lg"
              } cursor-pointer`}
            />
          ) : (
            <Image
              width={500}
              height={280}
              src={NotFoundImage}
              alt=""
              className={`w-full h-full ${
                roundedImage && "rounded-lg"
              } cursor-pointer bg-gray-200`}
            />
          )}
        </Link>
        <Box className="absolute top-3 right-3">
          <Options />
        </Box>
        <Box className="absolute left-3 bottom-[-26px]">
          <Rating voteAverage={voteAverage} />
        </Box>
      </Box>
      <Box className="pt-7 px-4 !pb-4 h-32 min-h-full">
        <Link href="/">
          <Typography
            className="text-base font-bold text-black cursor-pointer"
            variant="h5"
            component="div"
          >
            {fromHome
              ? `${title?.length > 20 ? `${title?.slice(0, 30)}...` : title}`
              : title}
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
      </Box>
    </>
  );
};

export default ItemCard;
