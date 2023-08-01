import React from "react";
import { UrlConfig } from "@/src/config/UrlConfig";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import PersonImageNotFound from "../../../assets/images/person-image-not found.svg";
import Link from "next/link";

type PropsType = {
  id: number;
  posterPath: string;
  name: string;
  character: string;
};

const CastAndCrewCard = ({ id, posterPath, name, character }: PropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        ":not(:last-child)": {
          marginBottom: "15px",
        },
      }}
    >
      <Link href={`/person/${id}`}>
        <Box sx={{ display: "flex" }}>
          {posterPath ? (
            <Image
              width={500}
              height={500}
              src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
              alt=""
              className="w-16 h-16 rounded-sm object-cover cursor-pointer"
            />
          ) : (
            <Image
              width={500}
              height={500}
              src={PersonImageNotFound}
              alt=""
              className="w-16 h-16 rounded-sm object-cover cursor-pointer"
            />
          )}
          <Box
            sx={{
              paddingLeft: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>{name || "N/A"}</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              {character || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default CastAndCrewCard;
