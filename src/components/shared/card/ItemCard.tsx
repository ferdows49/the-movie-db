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
  id: number;
  mediaType: string;
  posterPath: string;
  voteAverage: number;
  title: string;
  releaseDate: Date | string;
  roundedImage: boolean;
  fromHome?: boolean;
  textWhite?: boolean;
};

const ItemCard = ({
  id,
  title,
  mediaType,
  posterPath,
  voteAverage,
  releaseDate,
  roundedImage,
  fromHome = false,
  textWhite = false,
}: ItemCardPropsType) => {

  return (
    <>
      <Box
        className="relative"
        sx={{ height: `${fromHome ? "230px" : "320px"}`, minWidth: "150px" }}
      >
        <Link href={`${mediaType === "movie" ? `/movie/${id}` : `/tv/${id}`}`}>
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
        <Link href={`${mediaType === "movie" ? `/movie/${id}` : `/tv/${id}`}`}>
          <Typography
            className={`text-base font-bold ${
              textWhite ? "text-white" : "text-black"
            } cursor-pointer`}
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
            className={`text-base font-normal ${
              textWhite ? "text-white" : "text-black opacity-60"
            } mb-0`}
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
